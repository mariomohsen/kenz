import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CompassRose from "@/components/CompassRose";
import RopeDivider from "@/components/RopeDivider";
import ScheduleMap from "@/components/ScheduleMap";
import { getStoredTeam, clearStoredTeam } from "@/lib/teamStorage";
import { TEAM_COLORS, TEAM_NAMES, type TeamKey } from "@/lib/teamAnswers";

export default function TeamPage() {
  const navigate = useNavigate();
  const [team, setTeam] = useState<TeamKey | null>(null);

  useEffect(() => {
    const stored = getStoredTeam();
    if (!stored) {
      navigate("/", { replace: true });
      return;
    }
    setTeam(stored);
  }, [navigate]);

  if (!team) return null;

  const colors = TEAM_COLORS[team];

  return (
    <div className="min-h-screen bg-deepsea pb-16">
      <div className="mx-auto max-w-2xl px-4 pt-8 sm:pt-12">
        {/* Header / confirmation */}
        <div className="bg-parchment torn-edge rope-border px-5 py-6 text-center sm:px-8">
          <div className="no-print mb-5 flex justify-start">
            <Link
              to="/schedule/day-two"
              className="inline-flex items-center gap-2 rounded-md border-2 border-gold-600 bg-gold-500 px-4 py-2 text-sm font-bold text-wood-900 shadow-sm transition hover:bg-gold-400"
            >
              🎪 برنامج اليوم الثاني
            </Link>
          </div>
          <div className="mx-auto mb-2 flex justify-center">
            <CompassRose className="h-14 w-14" />
          </div>
          <p className="font-display text-xl font-bold text-green-800">✅ اجابتك صح</p>
          <RopeDivider className="my-4" />
          <p className="mb-2 font-display text-base text-wood-700">أهلاً بك أيها القرصان</p>
          <h1
            className="font-display text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: colors.text }}
          >
            انت في فريق {TEAM_NAMES[team]}
          </h1>
          <div
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 text-lg font-bold shadow-sm"
            style={{ borderColor: colors.accent, backgroundColor: colors.soft, color: colors.text }}
          >
            🏴‍☠️ فريق {TEAM_NAMES[team]}
          </div>
        </div>

        {/* Schedule / treasure map */}
        <div className="bg-parchment torn-edge rope-border mt-6 px-4 py-6 sm:px-8">
          <div className="mb-4 text-center">
            <h2 className="font-display text-2xl font-bold text-wood-900">🗺️ خريطة كنز اليوم</h2>
            <p className="mt-1 text-sm text-wood-700">برنامج اليوم الأول — اتبع المسار حتى الكنز</p>
          </div>

          <ScheduleMap team={team} />
        </div>

        <div className="no-print mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to={`/print/team-${team.toLowerCase()}`}
            className="w-full sm:w-auto rounded-lg border-2 border-wood-800 bg-gold-500 px-6 py-3 text-center font-bold text-wood-900 shadow-md transition hover:bg-gold-400"
          >
            🖨️ نسخة للطباعة
          </Link>
          <button
            onClick={() => {
              clearStoredTeam();
              navigate("/");
            }}
            className="w-full sm:w-auto rounded-lg border-2 border-parchment-200 bg-transparent px-6 py-3 text-center font-semibold text-parchment-100 transition hover:bg-white/10"
          >
            رجوع لبداية اللغز
          </button>
        </div>
      </div>
    </div>
  );
}
