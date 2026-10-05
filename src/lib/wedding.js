// Central wedding configuration. Update these values to personalize the site.
export const wedding = {
    bride: "Amara",
    groom: "Julian",
    hashtag: "#AmaraAndJulianForever",
    // Wedding date & times (local). Used by countdown and calendar.
    date: new Date("2026-09-12T16:00:00"),
    dateLabel: "September 12, 2026",
    ceremonyTime: "4:00 PM",
    receptionTime: "6:30 PM",
    venue: {
        name: "Ashford Estate",
        address: "637 Province Line Road, Allentown, NJ 08501",
        short: "Allentown, New Jersey",
        mapsQuery: "Ashford Estate, 637 Province Line Road, Allentown, NJ 08501",
    },
    contact: {
        email: "hello@amaraandjulian.com",
        phone: "+1 (555) 012-3456",
    },
};
export const navLinks = [
    { id: "home", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "guest-gallery", label: "Guest Gallery" },
    { id: "rsvp", label: "RSVP" },
    { id: "gifts", label: "Gifts" },
    { id: "location", label: "Location" },
    { id: "wishes", label: "Wishes" },
];
// Build calendar links for the wedding event.
function fmt(d) {
    return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
export function getCalendarLinks() {
    const start = wedding.date;
    const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
    const title = `${wedding.bride} & ${wedding.groom}'s Wedding`;
    const details = `Join us to celebrate the wedding of ${wedding.bride} & ${wedding.groom}.`;
    const loc = `${wedding.venue.name}, ${wedding.venue.address}`;
    const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(start)}/${fmt(end)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(loc)}`;
    const outlook = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${start.toISOString()}&enddt=${end.toISOString()}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(loc)}&path=/calendar/action/compose&rru=addevent`;
    const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        `DTSTART:${fmt(start)}`,
        `DTEND:${fmt(end)}`,
        `SUMMARY:${title}`,
        `DESCRIPTION:${details}`,
        `LOCATION:${loc}`,
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\n");
    const apple = `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
    return { google, outlook, apple };
}
