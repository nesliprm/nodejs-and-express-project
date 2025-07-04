import eventData from "../../data/events.json" assert { type: "json" };

export const getEvents = (title) => {
  let events = eventData.events;
  if (title) {
    events = events.filter((event) =>
      event.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  return events;
};
