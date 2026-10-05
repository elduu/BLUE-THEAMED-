import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
const meals = ["Beef Tenderloin", "Herb Chicken", "Pan-Seared Salmon", "Vegetarian", "Vegan"];
export function Rsvp() {
    const [submitted, setSubmitted] = useState(false);
    const [attending, setAttending] = useState("yes");
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const next = {};
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        if (!name)
            next.name = "Please enter your name.";
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
            next.email = "Please enter a valid email.";
        setErrors(next);
        if (Object.keys(next).length === 0)
            setSubmitted(true);
    };
    const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40";
    return (<section id="rsvp" className="bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Will you join us?" title="RSVP" subtitle="Kindly respond by August 1st, 2026. We can't wait to celebrate with you."/>

        {submitted ? (<div className="reveal is-visible rounded-3xl bg-card p-12 text-center shadow-elegant">
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-accent to-tan text-4xl text-accent-foreground" aria-hidden="true">✓</div>
            <h3 className="font-script text-4xl text-accent">Thank you!</h3>
            <p className="mt-2 text-2xl font-medium text-primary">Your response has been received</p>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              We're overjoyed that you'll be part of our special day. Keep an eye on your inbox for more details soon.
            </p>
            <button onClick={() => setSubmitted(false)} className="mt-7 rounded-full border border-accent px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/10">
              Submit another response
            </button>
          </div>) : (<form onSubmit={handleSubmit} noValidate className="reveal grid gap-5 rounded-3xl bg-card p-8 shadow-elegant sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                <input id="name" name="name" type="text" className={field} placeholder="Jane Doe" maxLength={100}/>
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input id="email" name="email" type="email" className={field} placeholder="jane@email.com" maxLength={255}/>
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                <input id="phone" name="phone" type="tel" className={field} placeholder="+1 (555) 000-0000" maxLength={30}/>
              </div>
              <div>
                <label htmlFor="guests" className="mb-1.5 block text-sm font-medium text-foreground">Number of Guests</label>
                <select id="guests" name="guests" className={field} defaultValue="1">
                  {[1, 2, 3, 4, 5].map((n) => (<option key={n} value={n}>{n}</option>))}
                </select>
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-medium text-foreground">Will you attend?</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                { v: "yes", label: "Joyfully accepts" },
                { v: "no", label: "Regretfully declines" },
            ].map((o) => (<label key={o.v} className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${attending === o.v ? "border-accent bg-accent/15 text-primary" : "border-input bg-card text-muted-foreground"}`}>
                    <input type="radio" name="attending" value={o.v} checked={attending === o.v} onChange={() => setAttending(o.v)} className="sr-only"/>
                    {o.label}
                  </label>))}
              </div>
            </div>

            {attending === "yes" && (<div>
                <label htmlFor="meal" className="mb-1.5 block text-sm font-medium text-foreground">Meal Preference</label>
                <select id="meal" name="meal" className={field} defaultValue={meals[0]}>
                  {meals.map((m) => (<option key={m} value={m}>{m}</option>))}
                </select>
              </div>)}

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Special Message</label>
              <textarea id="message" name="message" rows={4} className={field} maxLength={1000} placeholder="Share your well wishes or any dietary notes..."/>
            </div>

            <button type="submit" className="mt-2 rounded-full bg-gradient-to-r from-accent to-tan py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]">
              Send RSVP
            </button>
          </form>)}
      </div>
    </section>);
}
