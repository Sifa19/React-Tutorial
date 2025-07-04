const StarRating = ({ rating, fontSize = "14px" }) => {
  const fullStars = Number.parseInt(rating);
  const halfStars = !Number.isInteger(rating);

  return (
    <div className="star-filter" style={{ fontSize: fontSize }}>
      {Array.from({ length: fullStars }).map((_, index) => (
        <i key={index} className="fas fa-star"></i>
      ))}
      {halfStars && <i className="fas fa-star-half-alt"></i>}
    </div>
  );
};

export default StarRating;
