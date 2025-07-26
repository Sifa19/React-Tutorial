const StarRating = ({ rating, fontSize = "14px" }) => {
  const fullStars = Number.parseInt(rating);
  const halfStars = !Number.isInteger(rating);

  return (
    <div
      className="
      text-yellow-400 py-1 px-2
      border-1 rounded-4xl 
      cursor-pointer
      hover:shadow-xl transition-shadow duration-300"
      style={{ fontSize: fontSize }}
    >
      {Array.from({ length: fullStars }).map((_, index) => (
        <i key={index} className="fas fa-star"></i>
      ))}
      {halfStars && <i className="fas fa-star-half-alt"></i>}
    </div>
  );
};

export default StarRating;
