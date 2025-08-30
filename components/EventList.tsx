type EventData = {
  api_id: string;
  event: {
    api_id: string;
    name: string;
    start_at: string;
    cover_url: string;
    url: string;
  };
};

async function getEvents(): Promise<EventData[]> {
  const res = await fetch(
    "https://public-api.luma.com/v1/calendar/list-events",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-luma-api-key": process.env.LUMA_API_KEY as string,
      },
    },
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as { entries: EventData[] };
  return data.entries;
}

export const EventList = async () => {
  const events = await getEvents();
  return (
    <div className="grid gap-6 max-w-2xl mx-auto">
      {events.map(({ event, api_id }) => (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          key={api_id}
        >
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700">
            {event.cover_url && (
              <div className="flex-shrink-0">
                <img
                  src={event.cover_url}
                  alt={event.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {event.name}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                {new Date(event.start_at).toLocaleString(undefined, {
                  month: "long",
                  day: "numeric",
                  timeZone: "America/New_York",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
