import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/resList";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [resListState, setResListState] = useState(resList);
  const [filteredRestaurant, SetFilteredRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  let isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline</h1>;
  }
  return (
    <div className="bg-slate-200">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
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
