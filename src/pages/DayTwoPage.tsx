import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStoredTeam } from "@/lib/teamStorage";
import { TEAM_NAMES, type TeamKey } from "@/lib/teamAnswers";

interface DayTwoEvent {
  time: string;
  title: string;
  detail: string;
  icon: string;
}

// Edit these entries to build the complete second-day schedule.
const DAY_TWO_SCHEDULE: DayTwoEvent[] = [
  { time: "__:__", title: "أضف اسم الفعالية هنا", detail: "أضف التفاصيل هنا", icon: "✦" },
  { time: "__:__", title: "أضف اسم الفعالية هنا", detail: "أضف التفاصيل هنا", icon: "★" },
  { time: "__:__", title: "أضف اسم الفعالية هنا", detail: "أضف التفاصيل هنا", icon: "✧" },
  { time: "__:__", title: "أضف اسم الفعالية هنا", detail: "أضف التفاصيل هنا", icon: "★" },
  { time: "__:__", title: "أضف اسم الفعالية هنا", detail: "أضف التفاصيل هنا", icon: "✦" },
  { time: "__:__", title: "أضف اسم الفعالية هنا", detail: "أضف التفاصيل هنا", icon: "✧" },
];

export default function DayTwoPage() {
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

  return (
    <main className="circus-page min-h-screen overflow-hidden px-4 pb-14 pt-5 sm:px-6 sm:pt-8">
      <div className="circus-lights" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <nav className="circus-nav no-print flex flex-wrap items-center justify-between gap-3" aria-label="التنقل بين أيام المؤتمر">
          <Link to="/schedule" className="circus-ticket circus-ticket-light">
            ← اليوم الأول
          </Link>
          <span className="circus-team-mark">فريق {TEAM_NAMES[team]}</span>
          <span className="circus-nav-label">مؤتمر الشباب 2026</span>
        </nav>

        <header className="circus-hero mt-6 px-5 py-12 text-center sm:px-12 sm:py-16">
          <p className="circus-kicker">ليلة واحدة تحت الخيمة</p>
          <h1 className="circus-title mt-3">برنامج اليوم الثاني</h1>
          <div className="circus-star-line mx-auto mt-5" aria-hidden="true">✦ ━━━━━ ✦ ━━━━━ ✦</div>
          <p className="circus-subtitle mt-5">البرنامج قيد الإعداد — نلتقي عند أضواء السيرك</p>
        </header>

        <div className="circus-bunting" aria-hidden="true">
          <span /> <span /> <span /> <span /> <span /> <span />
        </div>

        <section className="circus-schedule mt-8 px-4 py-7 sm:px-10 sm:py-10" aria-labelledby="day-two-schedule">
          <div className="text-center">
            <p className="circus-kicker">الحلقة الثانية</p>
            <h2 id="day-two-schedule" className="circus-section-title mt-2">مواعيد العروض والفعاليات</h2>
          </div>

          <ol className="mt-8 grid gap-4">
            {DAY_TWO_SCHEDULE.map((event, index) => (
              <li className="circus-event" key={`${event.time}-${index}`}>
                <div className="circus-event-icon" aria-hidden="true">{event.icon}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3>{event.title}</h3>
                    <time>{event.time}</time>
                  </div>
                  <p>{event.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <footer className="circus-footer mt-8 text-center">
          <div className="circus-star-line" aria-hidden="true">✦ ━━━━━ ✦ ━━━━━ ✦</div>
          <p className="mt-4">ننتظركم في العرض القادم</p>
        </footer>
      </div>
    </main>
  );
}
