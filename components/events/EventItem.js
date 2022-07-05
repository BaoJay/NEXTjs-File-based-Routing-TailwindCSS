import Link from "next/link";

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  // Convert to readable date
  const dateReadable = new Date(date).toLocaleDateString("vn-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Convert the location
  const formattedLocation = location.replace(", ", "/n");

  // Navigate the link
  const exploreLink = `/events/${id}`;

  return (
    <li className="shadow-emerald-700 rounded-lg overflow-hidden bg-white flex flex-row gap-4">
      <img className="w-full object-cover h-40" src={"/" + image} alt={title} />
      <div className="w-full py-0 px-4 text-center">
        <div>
          <h2 className="my-2 mx-0 font-bold">{title}</h2>
          <div className="flex gap-2 items-center">
            <time className="font-bold">{dateReadable}</time>
          </div>
          <div className="flex gap-2 items-center">
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
