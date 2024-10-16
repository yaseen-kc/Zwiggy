import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let itemCards = cards.find((c) => c?.card?.card?.itemCards)?.card?.card
    ?.itemCards;

  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>{locality}</p>
      <h2>⭐{avgRating}</h2>
      <h4>{totalRatingsString}</h4>
      <p>💵{costForTwoMessage}</p>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            <p>{item.card.info.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
