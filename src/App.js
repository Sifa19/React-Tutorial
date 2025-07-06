import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Filter from "./components/Filter";

const AppLayout = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(2.5);
  return (
    <div className="app">
      <Header />
      <Filter
        listOfResturant={listOfResturant}
        setFilteredResturant={setFilteredResturant}
        setRatingFilter={setRatingFilter}
      />
      <Body
        filteredResturant={filteredResturant}
        setListOfResturant={setListOfResturant}
        setFilteredResturant={setFilteredResturant}
        ratingFilter={ratingFilter}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
