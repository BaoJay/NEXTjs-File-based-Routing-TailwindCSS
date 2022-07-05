import EventItem from "./EventItem";
import { getFeaturedEvents } from "../../dummy_data";

const EventList = (props) => {
  return (
    <ul className="w-11/12 max-w-2xl mx-auto my-auto">
      {props.items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
