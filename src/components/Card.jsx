import { IMAGE_CDN_URL } from "../utils/constants";

function Card({ data }) {
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

  return (
    <div className="card">
      <div className="card-image">
        <img src={imgSrc} alt="card" />
      </div>
      <div className="card-details">
        <h3 className="name">{name}</h3>
        <span className="ratings">⭐ {avgRating}</span>
        <span> | </span>
        <span className="dilivery-time">🕧 {sla?.slaString}</span>
        <span> | </span>
        <span className="cost-for-two"> {costForTwoMessage.toLowerCase()}</span>
        <p className="cusine"> {cuisines.join(", ")}</p>
      </div>
    </div>
  );
}

export default Card;
