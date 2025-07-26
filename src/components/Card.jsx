import { useState } from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function Card({ data }) {
  const card =
    "text-sm w-[250px] h-[300px] flex-row rounded-xl border-[1px] border-gray-200 shadow-sm mb-2 hover:shadow-xl sm:w-[300px] sm:h-[380px] sm:text-lg";

  const [show, setShow] = useState(false);
  const info = data.card?.card?.info;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    costForTwoMessage,
  } = info;
  const imgSrc = IMAGE_CDN_URL + cloudinaryImageId;

  function handleShow(e) {
    e.preventDefault();
    setShow((s) => !s);
  }

  return (
    <div className={card}>
      <div>
        <img
          className="w-[250px] h-[150px] sm:w-[310px] sm:h-[200px] rounded-t-xl"
          src={imgSrc}
          alt="card"
        />
      </div>
      <div className="px-6 pt-4 flex flex-col gap-2">
        <h3 className="font-bold">{name}</h3>
        <div>
          <span>⭐ {avgRating}</span>
          <span> | </span>
          <span>🕧 {sla?.slaString}</span>
          <span> | </span>
          <span> {costForTwoMessage.split(" ")[0]}</span>
        </div>
        <p className="font-extralight italic">
          {" "}
          {show ? cuisines.join(", ") : cuisines.slice(0, 2).join(", ") + "..."}
          <button
            className="ml-1 underline font-light cursor-pointer"
            onClick={handleShow}
          >
            {show ? "hide" : "show"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Card;
