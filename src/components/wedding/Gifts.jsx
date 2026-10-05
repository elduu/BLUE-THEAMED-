import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

// Replace these placeholder details with your real accounts.
const accounts = [
    {
        id: "cbe",
        type: "bank",
        name: "Commercial Bank of Ethiopia",
        holder: "Account Holder Name",
        number: "1000123456789",
        note: "Account number",
    },
    {
        id: "awash",
        type: "bank",
        name: "Awash Bank",
        holder: "Account Holder Name",
        number: "013201234567800",
        note: "Account number",
    },
    {
        id: "abyssinia",
        type: "bank",
        name: "Bank of Abyssinia",
        holder: "Account Holder Name",
        number: "12345678",
        note: "Account number",
    },
    {
        id: "telebirr",
        type: "mobile",
        name: "Telebirr",
        holder: "Account Holder Name",
        number: "0911 23 45 67",
        note: "Phone number",
    },
];

function CopyButton({ value, label }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value.replace(/\s/g, ""));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${label}`}
            className="mt-5 rounded-full border border-accent py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent/10"
        >
            {copied ? "Copied" : "Copy number"}
        </button>
    );
}

export function Gifts() {
    return (
        <section id="gifts" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="With gratitude"
                    title="Gift Registry"
                    subtitle="Your presence is the greatest gift of all. But should you wish to give, you can send a gift to any of the accounts below."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {accounts.map((a) => (
                        <div
                            key={a.id}
                            className="reveal flex flex-col rounded-3xl bg-card p-6 shadow-soft transition-transform hover:-translate-y-1.5 hover:shadow-elegant"
                        >
                            <div
                                className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-3xl"
                                aria-hidden="true"
                            >
                                {a.type === "bank" ? "🏦" : "📱"}
                            </div>

                            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                                {a.type === "bank" ? "Bank Transfer" : "Mobile Money"}
                            </span>
                            <h3 className="mt-1 text-xl font-medium text-primary">{a.name}</h3>

                            <dl className="mt-3 flex-1 space-y-3 text-sm">
                                <div>
                                    <dt className="text-xs text-muted-foreground">Name</dt>
                                    <dd className="font-medium text-primary">{a.holder}</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-muted-foreground">{a.note}</dt>
                                    <dd className="break-all font-mono text-base font-semibold tracking-wide text-primary">
                                        {a.number}
                                    </dd>
                                </div>
                            </dl>

                            <CopyButton value={a.number} label={`${a.name} ${a.note.toLowerCase()}`} />
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
                    Thank you for your generosity. Every gift, big or small, means the world to us.
                </p>
            </div>
        </section>
    );
}