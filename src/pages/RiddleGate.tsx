import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import CompassRose from "@/components/CompassRose";
import RopeDivider from "@/components/RopeDivider";
import { findTeamForAnswer } from "@/lib/teamAnswers";
import { setStoredTeam } from "@/lib/teamStorage";
import { CAMP_TITLE } from "@/lib/scheduleData";

export default function RiddleGate() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const team = findTeamForAnswer(answer);

    if (!team) {
      setError("الإجابة غير صحيحة، حاول مرة أخرى");
      return;
    }

    setError(null);
    setStoredTeam(team);
    navigate("/schedule");
  }

  return (
    <div className="relative min-h-screen bg-deepsea overflow-hidden flex items-center justify-center p-4">
      {/* decorative background waves */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          <path d="M0 60 Q50 40 100 60 T200 60 T300 60 T400 60 V100 H0 Z" fill="#3f8fa6" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -top-10 -left-10 opacity-30">
        <CompassRose className="h-40 w-40" />
      </div>

      <div className="pointer-events-none absolute bottom-2 right-2 w-40 opacity-90 sm:w-56">
        <img src="/images/hero-ship.png" alt="" className="w-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-parchment torn-edge rope-border px-6 py-8 sm:px-10 sm:py-10 text-center">
          <div className="mx-auto mb-3 flex justify-center">
            <CompassRose className="h-16 w-16" />
          </div>

          <p className="mb-1 font-display text-sm tracking-widest text-wood-700">
            ⚓ خريطة العودة للوطن ⚓
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold leading-relaxed text-wood-900">
            {CAMP_TITLE}
          </h1>

          <RopeDivider className="my-6" />

          <p className="mb-4 text-wood-800 leading-relaxed">
            حل لغز القائد وأدخل الإجابة هنا لتنضم إلى فريقك وتبدأ رحلة البحث عن الكنز 🏴‍☠️
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-right">
              <label htmlFor="riddle-answer" className="mb-1 block text-sm font-semibold text-wood-800">
                إجابة اللغز
              </label>
              <input
                id="riddle-answer"
                type="text"
                dir="rtl"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="اكتب إجابتك هنا..."
                className="w-full rounded-lg border-2 border-wood-700 bg-parchment-50 px-4 py-3 text-lg text-wood-900 outline-none placeholder:text-wood-500/60 focus:border-gold-500 focus:ring-2 focus:ring-gold-400"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm font-semibold text-red-700" role="alert">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg border-2 border-wood-800 bg-gold-500 py-3 text-lg font-bold text-wood-900 shadow-md transition hover:bg-gold-400 active:translate-y-px"
            >
              فتح الخريطة 🗝️
            </button>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-parchment-200/80">
          مؤتمر الصيف للشباب 2026 — رحلة العودة للوطن
        </p>
        {/* <p className="mt-1 text-center text-xs">
          <a href="#/print" className="text-parchment-300/70 underline">
            صفحة الطباعة لكل الفرق (للمنظمين)
          </a>
        </p> */}
      </div>
    </div>
  );
}
