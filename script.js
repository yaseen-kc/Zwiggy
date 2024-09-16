import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="404"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};

const ResList = [
  {
    id: "763910",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    image: "https://cloudinary.com/e0839ff574213e6f35b3899ebf1fc597",
    locality: "Edappally",
    areaName: "Vazakala",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.3,
  },
  {
    id: "93523",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_93523.JPG",
    image:
      "https://cloudinary.com/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_93523.JPG",
    locality: "Edappally",
    areaName: "Edappally",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 4.5,
  },
  {
    id: "52758",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e9200f7f-6f9d-45ae-ad99-d8d0234db809_52758.jpg",
    image:
      "https://cloudinary.com/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e9200f7f-6f9d-45ae-ad99-d8d0234db809_52758.jpg",
    locality: "Edappally",
    areaName: "Edappally",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.5,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={ResList[0]} />
        <RestaurantCard resData={ResList[1]} />
        <RestaurantCard resData={ResList[2]} />
      </div>
    </div>
  );
  ``;
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
