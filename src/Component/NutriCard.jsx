import { useContext } from "react";
import CartContext from "../Context/CartContext";

// title capitalizing first letter
const capitalizedTitle = (title) => {
  if (title && title.length > 0) {
    const capitalized = title.charAt(0).toUpperCase() + title.slice(1);
    return capitalized;
  }
  return title;
};

const NutriCard = ({ calories, protein, carbs, fat, title, id, quantity }) => {
  const { removeItem, increaseItem, decreaseItem } = useContext(CartContext);

  function handleRemoveItem(id) {
    removeItem(id);
  }

  return (
    <div className="nutrition_card">
      <h2 className="secondary_heading">{capitalizedTitle(title)}</h2>
      <ul className="item_description">
        <li className={`item ${calories > 2200 ? "maximum_quanity" : ""}`}>
          Calories: {calories}
        </li>
        <li className={`item ${protein > 150 ? "maximum_quanity" : ""}`}>
          Protein: {protein}g
        </li>
        <li className={`item ${carbs > 325 ? "maximum_quanity" : ""}`}>
          Carbs: {carbs}g
        </li>
        <li className={`item ${fat > 22 ? "maximum_quanity" : ""}`}>
          Fat: {fat}g
        </li>
      </ul>
      <div className="add_remove">
        <button
          className="seondary_button red_bg"
          onClick={() => {
            decreaseItem(id);
          }}
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button
          className="seondary_button green_bg"
          onClick={() => increaseItem(id)}
        >
          +
        </button>
      </div>
      <div className="edit_del">
        <button className="seondary_button blue_bg">Edit</button>
        <button
          className="seondary_button red_bg"
          onClick={() => {
            handleRemoveItem(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NutriCard;
