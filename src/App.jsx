import NutritionDisplay from "./Component/NutritionDisplay";
import NutritionForm from "./Component/NutritionForm";
import NutritionStat from "./Component/NutritionStat";

import { CartContextProvider } from "./Context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="container">
        <NutritionForm />
        <NutritionDisplay />
        <div className="division-line"></div>
        <NutritionStat />
      </div>
    </CartContextProvider>
  );
}

export default App;
