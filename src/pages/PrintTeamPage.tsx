import { useParams, Link, Navigate } from "react-router-dom";
import ScheduleMap from "@/components/ScheduleMap";
import CompassRose from "@/components/CompassRose";
import RopeDivider from "@/components/RopeDivider";
import { TEAM_COLORS, TEAM_NAMES, type TeamKey } from "@/lib/teamAnswers";

const SLUG_TO_TEAM: Record<string, TeamKey> = {
  "team-a": "A",
  "team-b": "B",
  "team-c": "C",
  "team-d": "D",
};

/**
 * Print-friendly full-day schedule for a single team.
 * Reachable directly (no riddle required) via /print/team-a ... /print/team-d
 * so all four can be printed ahead of time.
 */
export default function PrintTeamPage() {
  const { teamSlug } = useParams<{ teamSlug: string }>();
  const team = teamSlug ? SLUG_TO_TEAM[teamSlug] : undefined;

  if (!team) {
    return <Navigate to="/" replace />;
  }

  const colors = TEAM_COLORS[team];

  return (
    <div className="min-h-screen bg-parchment-100 py-6">
      <div className="no-print mx-auto mb-4 flex max-w-2xl items-center justify-between gap-3 px-4">
        <Link to="/print" className="text-sm font-semibold text-wood-700 underline">
          ← كل الفرق
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-lg border-2 border-wood-800 bg-gold-500 px-5 py-2 font-bold text-wood-900 shadow-md transition hover:bg-gold-400"
        >
          🖨️ طباعة
        </button>
      </div>

      <div className="print-page bg-parchment mx-auto max-w-2xl border-4 border-double border-wood-700 px-6 py-6 sm:px-10 sm:py-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <CompassRose className="h-14 w-14 flex-shrink-0" />
          <div className="flex-1 text-center">
            <p className="font-display text-xs tracking-widest text-wood-700">
              مؤتمر الصيف للشباب 2026 — البحر والقراصنة
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-wood-900">
              خريطة كنز اليوم الأول
            </h1>
          </div>
          <CompassRose className="h-14 w-14 flex-shrink-0" />
        </div>

        <div
          className="mx-auto mb-4 w-fit rounded-full border-2 px-6 py-2 text-center text-xl font-extrabold"
          style={{ borderColor: colors.accent, backgroundColor: colors.soft, color: colors.text }}
        >
          فريق {TEAM_NAMES[team]}
        </div>

        <RopeDivider className="mb-5" />

        <ScheduleMap team={team} printMode />

        <RopeDivider className="mt-4 mb-2" />
        <p className="text-center text-xs text-wood-600">
          بارك الله في خدمتكم — كنيسة الشباب • مؤتمر 2026
        </p>
      </div>
    </div>
  );
}
