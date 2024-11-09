import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <br />
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <br />
              <span className="text-green-600 text-xs">
                ★{item.card.info.ratings.aggregatedRating.rating}(
              </span>
              <span className="text-xs">
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>
            <p className="text-xs font-thin">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-10 my-32 rounded-md bg-gray-800 text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-md w-[250px] h-[150px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
