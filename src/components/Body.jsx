import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/resList";
import { Link } from "react-router-dom";

const Body = () => {
  const [resListState, setResListState] = useState(resList);
  const [filteredRestaurant, SetFilteredRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = resListState.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resListState.filter(
              (res) => res.data.avgRating > 4
            );
            SetFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.data?.id}
            to={"/restaurant/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
