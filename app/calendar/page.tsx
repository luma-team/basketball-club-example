export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f9] dark:bg-[rgb(19,21,23)]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          NYC Basketball Club Calendar
        </h1>
        <div className="bg-white dark:bg-[rgb(19,21,23)] rounded-lg overflow-hidden">
          <iframe
            src="https://luma.com/embed/calendar/cal-T5GeTkD49PGdo8W/events?utm_source=embed-on-website"
            width="100%"
            height="800"
            frameBorder="0"
            style={{ border: "none" }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}
