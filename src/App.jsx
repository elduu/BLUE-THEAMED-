import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/wedding/Navbar";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { CalendarSection } from "@/components/wedding/CalendarSection";
import { About } from "@/components/wedding/About";
import { Story } from "@/components/wedding/Story";
import { VideoSection } from "@/components/wedding/VideoSection";
import { Gallery } from "@/components/wedding/Gallery";
import { GalleryMarquee } from "@/components/wedding/GalleryMarquee";
import { GuestGallery } from "@/components/wedding/GuestGallery";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Gifts } from "@/components/wedding/Gifts";
import { Wishes } from "@/components/wedding/Wishes";
import { Location } from "@/components/wedding/Location";
import { Footer } from "@/components/wedding/Footer";
export function App() {
    useScrollReveal();
    return (<div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <CalendarSection />
        <About />
        <Story />
        <VideoSection />
        <Gallery />
        <GalleryMarquee />
        <GuestGallery />
        <Rsvp />
        <Gifts />
        <Wishes />
        <Location />
      </main>
      <Footer />
    </div>);
}
