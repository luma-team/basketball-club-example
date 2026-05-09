export default function IframePage() {
  return (
    <div className="min-h-screen bg-[#f7f8f9] dark:bg-[rgb(19,21,23)]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Register for an Event</h1>
        <iframe
          src="https://luma.com/embed/event/evt-jn2FAKqVE5cUJsM/simple"
          width="600"
          height="450"
          frameBorder="0"
          style={{
            border: "1px solid #bfcbda88",
            borderRadius: "4px",
          }}
          allow="fullscreen; payment"
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  );
}
