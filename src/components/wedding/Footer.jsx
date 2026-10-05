import { navLinks, wedding } from "@/lib/wedding";
const socials = [
    { label: "Instagram", icon: "M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.95 4.95.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.15 3.2-1.65 4.8-4.95 4.95-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.75-4.95-4.95C2.08 15.6 2.07 15.2 2.07 12s0-3.6.07-4.9C2.29 3.9 3.79 2.39 7.1 2.27 8.4 2.2 8.8 2.2 12 2.2Zm0 4.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5Zm5.2-9.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" },
    { label: "Facebook", icon: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" },
];
function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
export function Footer() {
    return (<footer className="relative overflow-hidden bg-primary px-6 py-16 text-cream">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-script text-4xl text-tan">{wedding.bride} &amp; {wedding.groom}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-cream/70">{wedding.dateLabel}</p>
        <p className="mt-1 text-sm text-cream/60">{wedding.hashtag}</p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navLinks.map((l) => (<button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-cream/80 transition-colors hover:text-tan">
              {l.label}
            </button>))}
        </nav>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((s) => (<a key={s.label} href="#" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-tan hover:text-tan">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon}/></svg>
            </a>))}
        </div>

        <div className="mt-8 text-sm text-cream/70">
          <a href={`mailto:${wedding.contact.email}`} className="hover:text-tan">{wedding.contact.email}</a>
          <span className="mx-2">·</span>
          <a href={`tel:${wedding.contact.phone}`} className="hover:text-tan">{wedding.contact.phone}</a>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} {wedding.bride} &amp; {wedding.groom}. Made with love.
        </div>
      </div>
    </footer>);
}
