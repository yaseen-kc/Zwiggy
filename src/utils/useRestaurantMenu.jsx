import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  let [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  getRestaurantInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurant(json.data);
  };

  return restaurant;
};

export default useRestaurantMenu;
