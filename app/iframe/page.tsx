export default function IframePage() {
  return (
    <div className="min-h-screen bg-[#f7f8f9] dark:bg-[rgb(19,21,23)]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Register for an Event</h1>
        <iframe
          src="https://luma.com/embed/event/evt-jn2FAKqVE5cUJsM/simple"
          className="w-full sm:w-[600px] h-[450px] rounded border border-[#bfcbda88]"
          allow="fullscreen; payment"
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  );
}
