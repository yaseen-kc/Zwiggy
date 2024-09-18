import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";

const Body = () => {
  const [resListState, setResList] = useState(resList);

  const filterTopRated = () => {
    const filteredList = resListState.filter((res) => res.avgRating >= 4.6);
    setResList(filteredList);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resListState.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
