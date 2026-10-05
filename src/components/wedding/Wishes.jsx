import { SectionHeading } from "./SectionHeading";
const wishes = [
    { name: "Sophia & Mark", text: "Wishing you a lifetime of love and laughter. So happy for you both!" },
    { name: "Grandma Rose", text: "My heart is full. May your marriage be as beautiful as your love." },
    { name: "The Carters", text: "Two wonderful people, one perfect match. Congratulations!" },
    { name: "Daniel", text: "Cheers to the happy couple — here's to forever and always." },
    { name: "Aunt Mei", text: "May every day together be brighter than the last. Love you both." },
    { name: "Liam & Ava", text: "Can't wait to dance the night away celebrating your love!" },
    { name: "Priya", text: "Sending you all the love in the world on your special day." },
    { name: "The Office Crew", text: "From colleagues to your biggest fans — congratulations!" },
];
function Card({ name, text }) {
    return (<figure className="flex w-72 shrink-0 flex-col justify-between rounded-2xl bg-card p-6 shadow-soft sm:w-80">
      <span className="font-display text-4xl leading-none text-accent/50" aria-hidden="true">&ldquo;</span>
      <blockquote className="-mt-3 text-sm leading-relaxed text-muted-foreground">{text}</blockquote>
      <figcaption className="mt-4 font-script text-2xl text-primary">{name}</figcaption>
    </figure>);
}
export function Wishes() {
    const row = [...wishes, ...wishes];
    return (<section id="wishes" className="overflow-hidden bg-secondary/40 py-24">
      <SectionHeading eyebrow="From those we love" title="Warm Wishes" subtitle="Heartfelt messages from the people who mean the most to us."/>
      <div className="marquee-paused">
        <div className="flex w-max animate-marquee gap-5 px-3" style={{ ["--marquee-duration"]: "50s" }}>
          {row.map((w, i) => (<Card key={i} {...w}/>))}
        </div>
      </div>
    </section>);
}
