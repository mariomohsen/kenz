import type { TeamKey } from "./teamAnswers";

export interface ScheduleStop {
  time: string;
  title: string;
  icon: string; // emoji used as a lightweight cross-platform icon
  note?: string;
}

/** Full-day schedule shared by all teams, with a placeholder marking the workshop block. */
const BASE_SCHEDULE: ScheduleStop[] = [
  { time: "1:30 – 2:30 م", title: "الافتتاحية", icon: "⚓️" },
  { time: "2:30 – 3:00 م", title: "لعبة الكنز", icon: "🗺️" },
  { time: "3:00 – 4:00 م", title: "الغذاء", icon: "🍽️" },
  { time: "4:00 – 5:00 م", title: "راحة", icon: "🏝️" },
  { time: "5:00 – 5:30 م", title: "صلاة الغروب", icon: "🌇" },
  { time: "5:30 – 6:30 م", title: "دراسة كتاب", icon: "📖" },
  { time: "6:30 – 8:30 م", title: "ورش العمل", icon: "🛠️", note: "WORKSHOPS" },
  { time: "8:30 – 9:15 م", title: "لعبة الكنز", icon: "🗺️" },
  { time: "9:15 – 11:30 م", title: "حفلة السمر", icon: "🎉" },
  { time: "11:30 م – 12:00 ص", title: "فيلم", icon: "🎬" },
];

export interface WorkshopStation {
  time: string;
  station: string;
  icon: string;
}

const STATION_ICONS: Record<string, string> = {
  "النداهة": "🧜‍♀️",
  "عمل فني": "🎨",
  "الدوامة": "🌀",
  "?": "❓",
};

/** Each team's 4-station rotation across the 7:30–9:30 PM workshop block. */
const WORKSHOP_ROTATION: Record<TeamKey, string[]> = {
  A: ["النداهة", "عمل فني", "الدوامة", "?"],
  B: ["عمل فني", "الدوامة", "?", "النداهة"],
  C: ["الدوامة", "?", "النداهة", "عمل فني"],
  D: ["?", "النداهة", "عمل فني", "الدوامة"],
};

const WORKSHOP_TIMES = ["7:30 – 8:00 م", "8:00 – 8:30 م", "8:30 – 9:00 م", "9:00 – 9:30 م"];

export function getWorkshopStations(team: TeamKey): WorkshopStation[] {
  return WORKSHOP_ROTATION[team].map((station, index) => ({
    time: WORKSHOP_TIMES[index],
    station,
    icon: STATION_ICONS[station] ?? "🛠️",
  }));
}

export function getFullSchedule(_team: TeamKey): ScheduleStop[] {
  // team param kept for API symmetry — workshop expansion is handled separately
  // via getWorkshopStations() and rendered inline by the schedule component.
  return BASE_SCHEDULE;
}

export const CAMP_TITLE = "اهلا بيك في اليوم الاول من مؤتمر الصيف للشباب 2026";
