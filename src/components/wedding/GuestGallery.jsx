import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
export function GuestGallery() {
    const [photos, setPhotos] = useState([]);
    const inputRef = useRef(null);
    useEffect(() => {
        return () => photos.forEach((p) => URL.revokeObjectURL(p.url));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleFiles = (files) => {
        if (!files)
            return;
        const next = [];
        Array.from(files).forEach((f) => {
            if (f.type.startsWith("image/")) {
                next.push({ url: URL.createObjectURL(f), name: f.name });
            }
        });
        setPhotos((prev) => [...next, ...prev]);
    };
    return (<section id="guest-gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Share the joy" title="Guest Gallery" subtitle="Captured a moment you love? Add your photos and help us build a shared album of memories."/>

        <div className="reveal mb-10 rounded-3xl border-2 border-dashed border-accent/50 bg-secondary/30 p-10 text-center" onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
        }}>
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-accent/20 text-3xl" aria-hidden="true">📸</div>
          <p className="text-lg font-medium text-primary">Drag & drop your photos here</p>
          <p className="mb-5 text-sm text-muted-foreground">or click below to choose from your device</p>
          <button onClick={() => inputRef.current?.click()} className="rounded-full bg-gradient-to-r from-accent to-tan px-7 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-soft transition-transform hover:scale-105">
            Upload Photos
          </button>
          <input ref={inputRef} type="file" accept="image/*" multiple className="sr-only" onChange={(e) => handleFiles(e.target.files)} aria-label="Upload guest photos"/>
        </div>

        {photos.length > 0 ? (<div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {photos.map((p, i) => (<img key={i} src={p.url} alt={`Guest upload: ${p.name}`} className="aspect-square w-full rounded-2xl object-cover shadow-soft"/>))}
          </div>) : (<p className="text-center text-muted-foreground">No photos yet — be the first to share a memory!</p>)}
      </div>
    </section>);
}
