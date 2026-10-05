import { SectionHeading } from "./SectionHeading";
import { wedding } from "@/lib/wedding";
export function Location() {
    const q = encodeURIComponent(wedding.venue.mapsQuery);
    const embed = `https://maps.google.com/maps?q=${q}&output=embed`;
    const buttons = [
        {
            label: "Google Maps",
            href: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
            icon: "🧭",
        },
        {
            label: "Apple Maps",
            href: `https://maps.apple.com/?daddr=${q}`,
            icon: "",
        },
        {
            label: "Waze",
            href: `https://waze.com/ul?q=${q}&navigate=yes`,
            icon: "🚗",
        },
        {
            label: "View on Map",
            href: `https://www.google.com/maps/search/?api=1&query=${q}`,
            icon: "📍",
        },
    ];
    return (<section id="location" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Find your way" title="The Venue" subtitle={`${wedding.venue.name} — ${wedding.venue.address}`}/>

        <div className="reveal overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
          <iframe title={`Map to ${wedding.venue.name}`} src={embed} className="h-[26rem] w-full border-0 md:h-[32rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          {buttons.map((b) => (<a key={b.label} href={b.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-gradient-to-r hover:from-accent hover:to-tan hover:text-accent-foreground">
              <span aria-hidden="true">{b.icon}</span>
              {b.label}
            </a>))}
        </div>
      </div>
    </section>);
}
