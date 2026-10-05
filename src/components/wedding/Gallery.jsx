import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import hero from "@/assets/hero.jpg";
import bride from "@/assets/bride.jpg";
const photos = [
    { src: g1, alt: "Navy and tan rose bouquet" },
    { src: g2, alt: "Couple walking through a golden field at sunset" },
    { src: bride, alt: "Bride holding her bouquet" },
    { src: g3, alt: "Elegant reception table setting" },
    { src: g4, alt: "Couple holding hands with wedding rings" },
    { src: hero, alt: "Couple embracing at golden hour" },
    { src: g5, alt: "First dance under string lights" },
];
export function Gallery() {
    const [index, setIndex] = useState(null);
    const close = useCallback(() => setIndex(null), []);
    const prev = useCallback(() => setIndex((i) => (i === null ? i : (i + photos.length - 1) % photos.length)), []);
    const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % photos.length)), []);
    useEffect(() => {
        if (index === null)
            return;
        const onKey = (e) => {
            if (e.key === "Escape")
                close();
            if (e.key === "ArrowLeft")
                prev();
            if (e.key === "ArrowRight")
                next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index, close, prev, next]);
    return (<section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Captured moments" title="Our Gallery" subtitle="A collection of memories, frozen in time and forever cherished."/>
        <div className="reveal columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {photos.map((p, i) => (<button key={i} onClick={() => setIndex(i)} className="group relative block w-full overflow-hidden rounded-2xl shadow-soft" aria-label={`Open image: ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <span className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/30" aria-hidden="true">
                <span className="scale-0 text-cream transition-transform duration-300 group-hover:scale-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" strokeLinecap="round"/></svg>
                </span>
              </span>
            </button>))}
        </div>
      </div>

      {index !== null && (<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button onClick={close} className="absolute right-5 top-5 text-cream/80 hover:text-cream" aria-label="Close">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 text-cream/80 hover:text-cream sm:left-8" aria-label="Previous">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img src={photos[index].src} alt={photos[index].alt} className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-elegant" onClick={(e) => e.stopPropagation()}/>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 text-cream/80 hover:text-cream sm:right-8" aria-label="Next">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>)}
    </section>);
}
