import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Filter from "./components/Filter";

const AppLayout = () => {
  const [ratingFilter, setRatingFilter] = useState(4.5);
  return (
    <div className="app">
      <Header />
      <Filter setRatingFilter={setRatingFilter} />
      <Body ratingFilter={ratingFilter} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
