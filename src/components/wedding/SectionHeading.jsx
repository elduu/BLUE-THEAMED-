export function SectionHeading({ eyebrow, title, subtitle, light = false, }) {
    return (<div className="reveal mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (<p className={`font-script text-3xl sm:text-4xl ${light ? "text-tan" : "text-accent"}`}>
          {eyebrow}
        </p>)}
      <h2 className={`mt-2 text-balance text-4xl font-medium tracking-tight sm:text-5xl ${light ? "text-cream" : "text-primary"}`}>
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden="true">
        <span className={`h-px w-12 ${light ? "bg-tan/60" : "bg-accent/50"}`}/>
        <span className={`text-lg ${light ? "text-tan" : "text-accent"}`}>❧</span>
        <span className={`h-px w-12 ${light ? "bg-tan/60" : "bg-accent/50"}`}/>
      </div>
      {subtitle && (<p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-cream/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>)}
    </div>);
}
