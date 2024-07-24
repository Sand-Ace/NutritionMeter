import { useContext, useRef } from "react";
import CartContext from "../Context/CartContext";

const NutritionForm = () => {
  const formRef = useRef();
  const { addItem } = useContext(CartContext);

  function generateFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fd = Object.fromEntries(formData.entries());
    addItem(fd);
  }

  function handleFormReset(event) {
    event.preventDefault();
    formRef.current.reset();
  }

  return (
    <form onSubmit={generateFormData} ref={formRef}>
      <h1 className="primary_heading">Sandesh Nutrition Meter</h1>
      <div className="input_container">
        <input type="text" placeholder="Item Name" name="title" />
        <input type="number" placeholder="Calorie" name="calorie" />
        <input
          type="number"
          step="0.1"
          placeholder="Protein (g)"
          name="protein"
        />
        <input type="number" step="0.1" placeholder="Carbs (g)" name="carb" />
        <input type="number" step="0.1" placeholder="Fat (g)" name="fat" />
      </div>
      <div className="actions">
        <button className="primary_button green_bg" type="submit">
          Add item
        </button>
        <button
          className="primary_button red_bg"
          onClick={handleFormReset}
          type="reset"
        >
          Clear All
        </button>
      </div>
    </form>
  );
};

export default NutritionForm;