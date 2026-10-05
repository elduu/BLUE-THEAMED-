import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import g5 from "@/assets/g5.jpg";
import g2 from "@/assets/g2.jpg";
const videos = [
    { title: "Engagement Film", poster: g5, id: "ScMzIvxBSi4", label: "Watch our engagement story" },
    { title: "Pre-Wedding Shoot", poster: g2, id: "ysz5S6PUM-U", label: "Behind the scenes" },
];
export function VideoSection() {
    const [active, setActive] = useState(null);
    return (<section id="video" className="relative overflow-hidden bg-primary px-6 py-24 text-cream">
      <SectionHeading eyebrow="In motion" title="Our Films" subtitle="Some moments are best remembered in motion. Press play and relive them with us." light/>
      <div className="reveal mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {videos.map((v) => (<button key={v.id} onClick={() => setActive(v.id)} className="group relative overflow-hidden rounded-3xl shadow-elegant" aria-label={`Play ${v.title}`}>
            <img src={v.poster} alt={v.title} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <span className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/25" aria-hidden="true"/>
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-cream/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
              <span className="font-display text-2xl font-medium text-cream">{v.title}</span>
              <span className="text-sm text-cream/70">{v.label}</span>
            </span>
          </button>))}
      </div>

      {active && (<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Video player">
          <button onClick={() => setActive(null)} className="absolute right-5 top-5 text-cream/80 hover:text-cream" aria-label="Close video">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/></svg>
          </button>
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-elegant" onClick={(e) => e.stopPropagation()}>
            <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${active}?autoplay=1`} title="Wedding video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
          </div>
        </div>)}
    </section>);
}
