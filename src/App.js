import React from "react";
import ReactDOM from "react-dom/client";

const biryaniRestaurants = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGWIaLxtyNCFo1W3_Khd_3Q5EUfaJPLzuTw&s",
    name: "Charcoal Eats - Biryani And Beyond",
    rating: "4.3",
    dilevery: "30 - 40",
    cusines: "North Indian, Chinese, Mughlai, Hyderabadi",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
    name: "Blue Nile",
    rating: "4.5",
    dilevery: "30 - 35",
    cusines: "Biryani, Indian, Chinese, Tandoor Camp",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12R4rDgR0nI3rZzTzhOYe5f4U4uj7aRxB7A&s",
    name: "Behrouz Biryani",
    rating: "4.4",
    dilevery: "25 - 30",
    cusines: "Biryani, Mughlai, North Indian",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZGfhXYbdyq5BhoxzV6ovAfL3PGZAv6hx-Q&s",
    name: "Biryani Blues",
    rating: "4.2",
    dilevery: "20 - 30",
    cusines: "Hyderabadi, North Indian, Biryani",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvHEE9GGNDY5s6NcF7Gbp3N-2NLFXJzSOig&s",
    name: "The Biryani Life",
    rating: "4.0",
    dilevery: "30 - 40",
    cusines: "Awadhi, Mughlai, Biryani",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrO8hR9S0rYF3SkcVQUkmAof5j7h1wG8OBNw&s",
    name: "Bikkgane Biryani",
    rating: "4.1",
    dilevery: "35 - 45",
    cusines: "Andhra, Biryani, South Indian",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY3Xp0HJc_fP6_bBhE5zZ8uxumPvbfLfGwQ&s",
    name: "Hyderabad House",
    rating: "4.3",
    dilevery: "30 - 40",
    cusines: "Hyderabadi, South Indian, Biryani",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4WbE3F0B9PKoxrwYYEjL3KmqrzlnHLo7iw&s",
    name: "Paradise Biryani",
    rating: "4.6",
    dilevery: "25 - 35",
    cusines: "Biryani, Mughlai, Indian",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ2sj_YMXD8JpzFV1KkHxTkffxogunP5qug&s",
    name: "Rang De Basanti Dhaba",
    rating: "4.2",
    dilevery: "20 - 30",
    cusines: "Punjabi, Biryani, North Indian",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjM4P4EG7CVl_i1xILum3heJMnIqk7emv8A&s",
    name: "Kolkata Biryani House",
    rating: "4.1",
    dilevery: "30 - 40",
    cusines: "Kolkata Style, Biryani, Bengali",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="serach-bar">
      <input></input>
      <button>🔍</button>
    </div>
  );
};

const Card = ({ data }) => {
  const { imgSrc, name, rating, dilevery, cusines } = data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgSrc} alt="card" />
      </div>
      <div className="card-details">
        <h3 className="name">{name}</h3>
        <span className="ratings">⭐ {rating}</span>
        <span> | </span>
        <span className="dilivery-time">🕧 {dilevery} mins</span>
        <p className="cusine"> {cusines}</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <Search />
      <div className="cards-container">
        {biryaniRestaurants.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
