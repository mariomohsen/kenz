import type { TeamKey } from "@/lib/teamAnswers";
import { TEAM_COLORS } from "@/lib/teamAnswers";
import { getFullSchedule, getWorkshopStations } from "@/lib/scheduleData";
import RopeDivider from "./RopeDivider";

interface ScheduleMapProps {
  team: TeamKey;
  printMode?: boolean;
}

/**
 * The "treasure map" styled visual schedule.
 * Renders as a vertical trail of numbered stops connecting like a map route,
 * with the team-specific workshop rotation expanded inline.
 */
export default function ScheduleMap({ team, printMode = false }: ScheduleMapProps) {
  const stops = getFullSchedule(team);
  const workshops = getWorkshopStations(team);
  const colors = TEAM_COLORS[team];

  return (
    <div className="relative">
      <ol className="relative flex flex-col gap-0">
        {stops.map((stop, index) => {
          const isLast = index === stops.length - 1;
          return (
            <li key={index} className="relative flex gap-4 pb-2">
              {/* connecting line */}
              {!isLast && (
                <span
                  className="absolute right-[23px] top-12 bottom-0 w-[3px]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(to bottom, ${colors.accent} 0, ${colors.accent} 6px, transparent 6px, transparent 12px)`,
                  }}
                  aria-hidden
                />
              )}
              {/* marker */}
              <div
                className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 text-xl shadow-md"
                style={{
                  backgroundColor: colors.soft,
                  borderColor: colors.accent,
                }}
              >
                <span>{stop.icon}</span>
              </div>

              <div
                className={`flex-1 rounded-xl border-2 ${
                  printMode ? "border-wood-700 bg-white/60" : "bg-parchment-50/70 shadow-sm"
                } px-4 py-3 mb-3`}
                style={!printMode ? { borderColor: colors.accent } : undefined}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3
                    className="font-display text-lg font-bold"
                    style={{ color: colors.text }}
                  >
                    {stop.title}
                  </h3>
                  <span className="font-display text-sm font-semibold text-wood-700 whitespace-nowrap">
                    {stop.time}
                  </span>
                </div>

                {stop.title === "ورش العمل" && (
                  <div className="mt-2">
                    <RopeDivider className="mb-2 opacity-60" />
                    <ul className="grid grid-cols-2 gap-2">
                      {workshops.map((w, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 rounded-lg border border-dashed px-2 py-1.5 text-sm"
                          style={{ borderColor: colors.accent, backgroundColor: colors.soft + "80" }}
                        >
                          <span>{w.icon}</span>
                          <span className="font-semibold" style={{ color: colors.text }}>
                            {w.station}
                          </span>
                          <span className="mr-auto text-xs text-wood-700">{w.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
