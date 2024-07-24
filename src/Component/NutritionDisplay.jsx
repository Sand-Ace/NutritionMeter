import { useContext } from "react";
import NutriCard from "./NutriCard";
import CartContext from "../Context/CartContext";

const NutritionDisplay = () => {
  const { items } = useContext(CartContext);
  return (
    <div className="nutrition_items_grid">
      {items.map((item) => {
        return (
          <NutriCard
            key={item.id}
            id={item.id}
            calories={item.calorie}
            protein={item.protein}
            carbs={item.carb}
            fat={item.fat}
            title={item.title}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default NutritionDisplay;
