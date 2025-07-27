import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons";
function ResturantSummary({ details }) {
  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRatingString,
    totalRatingsString,
    sla,
  } = details;
  const deliveryTime = sla.slaString;
  return (
    <div className="m-4">
      <h1 className="mb-6 text-2xl font-extrabold">{name}</h1>
      <div
        className="p-6 border-2 border-solid 
        border-stone-200 rounded-2xl shadow-stone-200 shadow-lg
        "
      >
        <div className="font-bold flex items-center gap-4">
          <div className="flex items-center gap-1 relative">
            <span
              className="fa-layers fa-fw text-green-600"
              style={{ fontSize: "1em" }}
            >
              <FontAwesomeIcon icon={faCircle} />
              <FontAwesomeIcon icon={faStar} transform="shrink-6" inverse />
            </span>
            <span>{avgRatingString}</span>
            <span>({totalRatingsString})</span>
          </div>
          <span className="text-stone-400 text-4xl relative -top-2.5 ">.</span>
          <span>{costForTwoMessage}</span>
        </div>
        <div className=" font-medium text-red-500">
          {cuisines.map((cuisine, i) => (
            <span key={i} className="underline pr-1">
              {cuisine}
              {i < cuisines.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
        <ul>
          <li className="list-disc ml-4 marker:text-stone-400 marker:text-lg">
            <span className="font-bold mr-4">Outlet</span>{" "}
            <span>{locality}</span>
          </li>
          <li className="list-disc ml-4 marker:text-stone-400 marker:text-lg">
            <span className="font-bold">{deliveryTime?.toLowerCase()}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResturantSummary;
