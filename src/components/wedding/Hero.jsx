import heroImg from "@/assets/hero.jpg";
import { wedding } from "@/lib/wedding";
function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
export function Hero() {
    return (<section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img src={heroImg} alt={`${wedding.bride} and ${wedding.groom} embracing at golden hour`} width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high"/>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true"/>

      {/* Floating decorative elements */}
      <span className="animate-float-slow pointer-events-none absolute left-[8%] top-[18%] text-4xl text-tan/50 sm:text-6xl" aria-hidden="true">❀</span>
      <span className="animate-float-slow pointer-events-none absolute right-[10%] top-[26%] text-3xl text-cream/40 sm:text-5xl" style={{ animationDelay: "1.5s" }} aria-hidden="true">✦</span>
      <span className="animate-float-slow pointer-events-none absolute bottom-[16%] left-[14%] text-3xl text-tan/40 sm:text-5xl" style={{ animationDelay: "3s" }} aria-hidden="true">❁</span>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
        <p className="reveal is-visible font-script text-3xl text-tan sm:text-4xl">We're getting married</p>
        <h1 className="mt-3 text-balance font-display text-6xl font-medium leading-none tracking-tight sm:text-8xl">
          {wedding.bride}
          <span className="mx-3 font-script text-4xl text-tan sm:text-6xl">&amp;</span>
          {wedding.groom}
        </h1>
        <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-cream/40"/>
          <span className="text-sm uppercase tracking-[0.3em] text-cream/90">{wedding.dateLabel}</span>
          <span className="h-px flex-1 bg-cream/40"/>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Two souls, one beautiful journey. Join us as we celebrate the beginning of our forever
          beneath the autumn sky in {wedding.venue.short}.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={() => scrollTo("rsvp")} className="w-full rounded-full bg-gradient-to-r from-accent to-tan px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-elegant transition-transform hover:scale-105 sm:w-auto">
            RSVP Now
          </button>
          <button onClick={() => scrollTo("calendar")} className="w-full rounded-full border border-cream/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream backdrop-blur-sm transition-colors hover:bg-cream/10 sm:w-auto">
            View Details
          </button>
        </div>
      </div>

      <button onClick={() => scrollTo("countdown")} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/80 transition-colors hover:text-cream" aria-label="Scroll down">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
          <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>);
}
