import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/resList";

const Body = () => {
  const [resListState, setResList] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, SetFilteredRestaurant] = useState(resList);

  // useEffect(() => {
  //   console.log("useEffect triggered");
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   setResList(json?.data?.cards[1]?.data?.data?.cards);
  // };

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
            setResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
