import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import hero from "@/assets/hero.jpg";
const strip = [
    { src: hero, alt: "Couple at golden hour" },
    { src: g2, alt: "Couple in a field" },
    { src: g3, alt: "Reception table" },
    { src: g4, alt: "Holding hands" },
    { src: g5, alt: "First dance" },
    { src: g1, alt: "Bouquet" },
];
export function GalleryMarquee() {
    const items = [...strip, ...strip];
    return (<section className="marquee-paused overflow-hidden bg-secondary/40 py-10" aria-label="Photo marquee">
      <div className="flex w-max animate-marquee gap-4" style={{ ["--marquee-duration"]: "45s" }}>
        {items.map((p, i) => (<img key={i} src={p.src} alt={p.alt} loading="lazy" aria-hidden={i >= strip.length} className="h-48 w-72 shrink-0 rounded-2xl object-cover shadow-soft sm:h-64 sm:w-96"/>))}
      </div>
    </section>);
}
