import type { GetStaticProps } from "next";
import { HomePage } from "@/components/HomePage";
import { fetchEvents, type EventData } from "@/components/EventList";

type Props = { events: EventData[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await fetchEvents();
  return { props: { events }, revalidate: 60 };
};

export default function Home({ events }: Props) {
  return <HomePage events={events} />;
}
