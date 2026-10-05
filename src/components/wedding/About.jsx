import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";
import { SectionHeading } from "./SectionHeading";
import { wedding } from "@/lib/wedding";
const people = [
    {
        name: wedding.bride,
        role: "The Bride",
        img: brideImg,
        bio: "An architect with a love for old books, slow mornings, and wildflowers. Amara fills every room with warmth and finds beauty in the smallest details — qualities Julian fell for the moment they met.",
        flip: false,
    },
    {
        name: wedding.groom,
        role: "The Groom",
        img: groomImg,
        bio: "A film composer who collects vinyl and bad jokes in equal measure. Julian is the steady, gentle heart of every gathering, and he has loved Amara since their very first cup of coffee together.",
        flip: true,
    },
];
export function About() {
    return (<section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Get to know us" title="About the Couple" subtitle="Two different worlds that found a perfect rhythm together."/>
        <div className="space-y-16 md:space-y-24">
          {people.map((p) => (<div key={p.name} className={`reveal grid items-center gap-8 md:grid-cols-2 md:gap-14 ${p.flip ? "md:[direction:rtl]" : ""}`}>
              <div className="relative [direction:ltr]">
                <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent/30 to-tan/20 blur-xl" aria-hidden="true"/>
                <img src={p.img} alt={`Portrait of ${p.name}, ${p.role}`} width={900} height={1100} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"/>
              </div>
              <div className="[direction:ltr]">
                <p className="font-script text-3xl text-accent">{p.role}</p>
                <h3 className="mt-1 text-4xl font-medium text-primary sm:text-5xl">{p.name}</h3>
                <div className="my-5 h-px w-16 bg-accent/50" aria-hidden="true"/>
                <p className="text-lg leading-relaxed text-muted-foreground">{p.bio}</p>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
