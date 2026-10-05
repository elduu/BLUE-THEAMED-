import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";
function getRemaining() {
    const diff = wedding.date.getTime() - Date.now();
    const clamp = Math.max(diff, 0);
    return {
        days: Math.floor(clamp / 86400000),
        hours: Math.floor((clamp / 3600000) % 24),
        minutes: Math.floor((clamp / 60000) % 60),
        seconds: Math.floor((clamp / 1000) % 60),
    };
}
export function Countdown() {
    const [t, setT] = useState(getRemaining);
    useEffect(() => {
        const id = setInterval(() => setT(getRemaining()), 1000);
        return () => clearInterval(id);
    }, []);
    const units = [
        { label: "Days", value: t.days },
        { label: "Hours", value: t.hours },
        { label: "Minutes", value: t.minutes },
        { label: "Seconds", value: t.seconds },
    ];
    return (<section id="countdown" className="relative overflow-hidden bg-primary px-6 py-24 text-cream">
      <span className="pointer-events-none absolute -left-10 top-6 text-[10rem] text-cream/5" aria-hidden="true">❦</span>
      <span className="pointer-events-none absolute -right-10 bottom-0 text-[10rem] text-cream/5" aria-hidden="true">❦</span>
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="reveal font-script text-3xl text-tan sm:text-4xl">Counting down to</p>
        <h2 className="reveal mt-2 text-4xl font-medium text-cream sm:text-5xl">Our Wedding Day</h2>
        <div className="reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {units.map((u) => (<div key={u.label} className="rounded-2xl border border-cream/15 bg-cream/5 py-7 backdrop-blur-sm">
              <div className="font-display text-5xl font-semibold tabular-nums text-tan sm:text-6xl">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/70">{u.label}</div>
            </div>))}
        </div>
      </div>
    </section>);
}
