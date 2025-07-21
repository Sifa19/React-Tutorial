import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(4);

  useEffect(() => {
    console.log("Api Call");
  }, []);
  return (
    <div>
      <h2>User: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact</h4>
      <span>
        COUNT : {count}, RATING : {rating}
      </span>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>Update Count</button>
    </div>
  );
};

export default User;
