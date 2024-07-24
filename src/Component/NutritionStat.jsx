import { useContext } from "react";
import CartContext from "../Context/CartContext";

const findTotal = (items, identifier) => {
  const total = items.reduce((total, item) => {
    return total + Number(item[identifier]);
  }, 0);

  return total;
};

const NutritionStat = () => {
  const { items } = useContext(CartContext);

  const totalCalorie = findTotal(items, "calorie");
  const totalProtein = findTotal(items, "protein");
  const totalCarb = findTotal(items, "carb");
  const totalFat = findTotal(items, "fat");

  return (
    <>
      {items.length > 0 && (
        <div className="total_stat">
          <h2 className="secondary_heading stat-heading">Total</h2>
          <p>
            Calories: <strong>{totalCalorie}g</strong>
          </p>
          <p>
            Protein: <strong>{totalProtein}g</strong>
          </p>
          <p>
            Carbs: <strong>{totalCarb}g</strong>
          </p>
          <p>
            Fat: <strong>{totalFat}g</strong>
          </p>
        </div>
      )}
      {items.length === 0 && (
        <p className="fallback_text">
          Please fill the form to calculate the nutrition data.
        </p>
      )}
    </>
  );
};

export default NutritionStat;
