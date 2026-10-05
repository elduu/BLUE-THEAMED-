import { useEffect, useState } from "react";
import { navLinks, wedding } from "@/lib/wedding";
function smoothScrollTo(id) {
    const el = document.getElementById(id);
    if (el)
        el.scrollIntoView({ behavior: "smooth", block: "start" });
}
export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const handleNav = (id) => {
        setOpen(false);
        smoothScrollTo(id);
    };
    return (<header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-background/90 shadow-soft backdrop-blur-md"
            : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <button onClick={() => handleNav("home")} className={`shrink-0 font-display text-xl font-semibold tracking-wide transition-colors ${scrolled ? "text-primary" : "text-cream"}`} aria-label="Back to top">
          {wedding.bride[0]} <span className="font-script text-accent">&amp;</span> {wedding.groom[0]}
        </button>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (<li key={l.id}>
              <button onClick={() => handleNav(l.id)} className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-cream/90"}`}>
                {l.label}
              </button>
            </li>))}
        </ul>

        <button onClick={() => handleNav("rsvp")} className="hidden rounded-full bg-gradient-to-r from-accent to-tan px-5 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-105 lg:inline-flex">
          RSVP
        </button>

        <button onClick={() => setOpen((v) => !v)} className={`lg:hidden ${scrolled ? "text-primary" : "text-cream"}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (<path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/>) : (<path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>)}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden bg-background/98 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[32rem] border-b border-border" : "max-h-0"}`}>
        <ul className="flex flex-col px-6 py-2">
          {navLinks.map((l) => (<li key={l.id}>
              <button onClick={() => handleNav(l.id)} className="w-full border-b border-border/50 py-3 text-left text-base font-medium text-foreground transition-colors hover:text-accent">
                {l.label}
              </button>
            </li>))}
        </ul>
      </div>
    </header>);
}
