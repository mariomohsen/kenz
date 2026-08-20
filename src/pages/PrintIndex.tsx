import { Link } from "react-router-dom";
import { TEAM_COLORS, TEAM_NAMES, type TeamKey } from "@/lib/teamAnswers";
import CompassRose from "@/components/CompassRose";

const TEAMS: TeamKey[] = ["A", "B", "C", "D"];
const SLUGS: Record<TeamKey, string> = {
  A: "team-a",
  B: "team-b",
  C: "team-c",
  D: "team-d",
};

/** Simple index of printable schedules for all 4 teams — no riddle needed. */
export default function PrintIndex() {
  return (
    <div className="min-h-screen bg-deepsea flex items-center justify-center p-4">
      <div className="bg-parchment torn-edge rope-border w-full max-w-md px-6 py-8 text-center">
        <div className="mx-auto mb-3 flex justify-center">
          <CompassRose className="h-16 w-16" />
        </div>
        <h1 className="font-display text-2xl font-bold text-wood-900">
          خرائط الطباعة — كل الفرق
        </h1>
        <p className="mt-1 mb-6 text-sm text-wood-700">
          اختر فريقًا لعرض وطباعة خريطة الكنز الخاصة به
        </p>

        <div className="grid grid-cols-1 gap-3">
          {TEAMS.map((team) => {
            const colors = TEAM_COLORS[team];
            return (
              <Link
                key={team}
                to={`/print/${SLUGS[team]}`}
                className="flex items-center justify-between rounded-xl border-2 px-5 py-4 font-bold shadow-sm transition hover:-translate-y-0.5"
                style={{ borderColor: colors.accent, backgroundColor: colors.soft, color: colors.text }}
              >
                <span>فريق {TEAM_NAMES[team]}</span>
                <span>🖨️ عرض للطباعة</span>
              </Link>
            );
          })}
        </div>

        <Link to="/" className="mt-6 inline-block text-sm text-wood-700 underline">
          ← رجوع للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
