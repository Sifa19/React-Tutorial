import { IMAGE_CDN_URL } from "../utils/constants";

function Card({ data }) {
  // const { imgSrc, name, rating, dilevery, cusines } = data;
  const info = data.card;
  const imgSrc = IMAGE_CDN_URL + info.cloudinaryImageId;
  const name = info.name;
  const rating = info.avgRating;
  const dilevery = info.sla.slaString;
  const cusines = info.cuisines.join(", ");
  const costForTow = info.costForTwo;
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgSrc} alt="card" />
      </div>
      <div className="card-details">
        <h3 className="name">{name}</h3>
        <span className="ratings">⭐ {rating}</span>
        <span> | </span>
        <span className="dilivery-time">🕧 {dilevery}</span>
        <span> | </span>
        <span className="cost-for-two"> {costForTow}</span>
        <p className="cusine"> {cusines}</p>
      </div>
    </div>
  );
}

export default Card;
