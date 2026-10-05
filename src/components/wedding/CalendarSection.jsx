import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { getCalendarLinks, wedding } from "@/lib/wedding";
export function CalendarSection() {
    const [open, setOpen] = useState(false);
    const links = getCalendarLinks();
    const events = [
        { icon: "💍", title: "The Ceremony", time: wedding.ceremonyTime, desc: "Exchange of vows in the garden pavilion." },
        { icon: "🥂", title: "The Reception", time: wedding.receptionTime, desc: "Dinner, dancing & celebration in the grand hall." },
    ];
    return (<section id="calendar" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Save the date" title="When & Where" subtitle="We would be honored to have you celebrate this day with us. Add it to your calendar so you don't miss a moment."/>

        <div className="reveal grid items-stretch gap-6 md:grid-cols-[1fr_1.1fr]">
          {/* Date card */}
          <div className="flex flex-col items-center justify-center rounded-3xl bg-primary p-10 text-center text-cream shadow-elegant">
            <p className="text-sm uppercase tracking-[0.3em] text-tan">Saturday</p>
            <p className="my-3 font-display text-8xl font-semibold leading-none text-cream">12</p>
            <p className="text-sm uppercase tracking-[0.3em] text-tan">September 2026</p>
            <p className="mt-6 max-w-xs text-cream/80">{wedding.venue.name}</p>
            <p className="text-sm text-cream/60">{wedding.venue.address}</p>
          </div>

          {/* Events */}
          <div className="flex flex-col gap-5">
            {events.map((e) => (<div key={e.title} className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft">
                <span className="text-3xl" aria-hidden="true">{e.icon}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-2xl font-medium text-primary">{e.title}</h3>
                    <span className="rounded-full bg-accent/20 px-3 py-0.5 text-sm font-semibold text-accent-foreground">
                      {e.time}
                    </span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{e.desc}</p>
                </div>
              </div>))}

            <div className="relative">
              <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-accent bg-accent/10 py-4 font-semibold text-primary transition-colors hover:bg-accent/20" aria-expanded={open}>
                <span aria-hidden="true">📅</span> Add to Calendar
              </button>
              {open && (<div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-popover shadow-elegant">
                  {[
                { label: "Google Calendar", href: links.google, dl: false },
                { label: "Apple Calendar", href: links.apple, dl: true },
                { label: "Outlook", href: links.outlook, dl: false },
            ].map((opt) => (<a key={opt.label} href={opt.href} {...(opt.dl ? { download: "wedding.ics" } : { target: "_blank", rel: "noreferrer" })} className="block border-b border-border/50 px-5 py-3 text-foreground transition-colors last:border-0 hover:bg-secondary">
                      {opt.label}
                    </a>))}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
