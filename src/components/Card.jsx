import { useState } from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function Card({ data }) {
  const card =
    "text-sm w-[250px] h-[320px] flex-row rounded-xl border-[1px] border-gray-200 shadow-sm mb-2 hover:shadow-xl sm:w-[300px] sm:h-[400px] sm:text-lg";

  const [show, setShow] = useState(false);
  const info = data?.card?.card?.info;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    costForTwoMessage,
    areaName,
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
        <h3 data-testid="resName" className="font-bold">
          {name}
        </h3>
        <span className="text-sm">
          {areaName.charAt(0).toUpperCase() + areaName.slice(1).toLowerCase()}
        </span>
        <div className="text-[1.1rem]">
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

function CardWithPromotedLabel(Card) {
  return ({ data }) => {
    console.log(data);
    return (
      <div className="relative">
        <div
          className="
         absolute top-4 left-[-10px] bg-stone-800 text-stone-100
         px-4 rounded-r-2xl
        "
        >
          Promoted
          <div
            className="absolute left-0 w-0 h-0"
            style={{
              borderBottom: "12px solid transparent",
              borderRight: "12px solid oklch(26.8% .007 34.298)",
            }}
          ></div>
        </div>

        <Card data={data} />
      </div>
    );
  };
}

export { Card, CardWithPromotedLabel };
