import { SectionHeading } from "./SectionHeading";
import g2 from "@/assets/g2.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import hero from "@/assets/hero.jpg";
const milestones = [
    {
        year: "2019",
        title: "First Meeting",
        text: "A rainy afternoon, a crowded café, and one shared umbrella. We argued over the last almond croissant — and have been inseparable ever since.",
        img: hero,
    },
    {
        year: "2020",
        title: "First Date",
        text: "Dinner that turned into a midnight walk that turned into watching the sunrise. We knew, somehow, that this was the beginning of everything.",
        img: g2,
    },
    {
        year: "2024",
        title: "The Proposal",
        text: "On a quiet hill above the city, beneath a sky full of stars, Julian got down on one knee. Amara said yes before he finished the question.",
        img: g4,
    },
    {
        year: "2026",
        title: "Our Wedding",
        text: "And now, surrounded by everyone we love, we begin our greatest adventure yet — a lifetime, hand in hand.",
        img: g5,
    },
];
export function Story() {
    return (<section id="story" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="How it began" title="Our Love Story" subtitle="Every great love has a beginning. Here's a glimpse of ours."/>
        <div className="relative">
          {/* center line */}
          <div className="absolute left-6 top-0 h-full w-px bg-accent/40 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"/>
          <div className="space-y-12">
            {milestones.map((m, i) => (<div key={m.title} className={`reveal relative grid gap-6 pl-16 md:grid-cols-2 md:gap-12 md:pl-0 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                {/* dot */}
                <span className="absolute left-6 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-accent shadow md:left-1/2" aria-hidden="true"/>
                <div className="[direction:ltr]">
                  <img src={m.img} alt={`${m.title} — ${m.year}`} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover shadow-soft"/>
                </div>
                <div className="flex flex-col justify-center [direction:ltr]">
                  <span className="font-script text-3xl text-accent">{m.year}</span>
                  <h3 className="mt-1 text-3xl font-medium text-primary">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
}
