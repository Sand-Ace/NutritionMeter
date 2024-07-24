import { useContext } from "react";
import CartContext from "../Context/CartContext";

const NutriCard = ({ calories, protein, carbs, fat, title, id }) => {
  const { removeItem } = useContext(CartContext);

  function handleRemoveItem(id) {
    console.log(id);
    removeItem(id);
  }

  return (
    <div className="nutrition_card">
      <h2 className="secondary_heading">{title}</h2>
      <ul className="item_description">
        <li className="item">Calories: {calories}</li>
        <li className="item">Protein: {protein}g</li>
        <li className="item">Carbs: {carbs}g</li>
        <li className="item">Fat: {fat}g</li>
      </ul>
      <div className="add_remove">
        <button className="seondary_button red_bg">-</button>
        <span className="quantity">1</span>
        <button className="seondary_button green_bg">+</button>
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
