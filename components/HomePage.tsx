import { EventList } from "@/components/EventList";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                NYC Basketball Club
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join our community of basketball enthusiasts who meet regularly
                to play and socialize in New York City.
              </p>
              <div className="mt-6 flex gap-4 justify-center">
                <a
                  href="/calendar"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors"
                >
                  View Full Calendar
                </a>
                <a
                  href="https://luma.com/nycbball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Follow on Luma
                </a>
              </div>
            </div>

            {/* Events Section */}
            <div className="mt-16 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Upcoming Events
              </h2>

              <EventList />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <a
          href="https://github.com/luma-team/basketball-club-example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          View on GitHub
        </a>
      </footer>
    </div>
  );
}
