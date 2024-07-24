import { createContext, useEffect, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseItem: (id) => {},
  decreaseItem: (id) => {},
});

function cartReducerFunction(state, action) {
  if (action.type === "ADD") {
    const updatedItems = [...state.items];
    const existingItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );
    if (existingItemIndex === -1) {
      //   const updatedItem = {
      //     ...action.item,
      //     id: action.item.title,
      //   };
      updatedItems.push({ ...action.item, id: action.item.title, quantity: 1 });
    } else {
      return state;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // Do something
    const updatedItems = [...state.items];
    const filteredItems = updatedItems.filter((item) => item.id !== action.id);

    return { ...state, items: filteredItems };
  }

  if (action.type === "INCREASE") {
    const updatedItems = [...state.items];
    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = updatedItems[existingItemIndex];

    if (existingItem.quantity <= 99) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
        calorie:
          (existingItem.calorie / existingItem.quantity) *
          (existingItem.quantity + 1),
        carb:
          (existingItem.carb / existingItem.quantity) *
          (existingItem.quantity + 1),
        fat:
          (existingItem.fat / existingItem.quantity) *
          (existingItem.quantity + 1),
        protein:
          (existingItem.protein / existingItem.quantity) *
          (existingItem.quantity + 1),
      };

      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "DECREASE") {
    const updatedItems = [...state.items];
    const existingItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = updatedItems[existingItemIndex];
    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
        calorie:
          (existingItem.calorie / existingItem.quantity) *
          (existingItem.quantity - 1),
        carb:
          (existingItem.carb / existingItem.quantity) *
          (existingItem.quantity - 1),
        fat:
          (existingItem.fat / existingItem.quantity) *
          (existingItem.quantity - 1),
        protein:
          (existingItem.protein / existingItem.quantity) *
          (existingItem.quantity - 1),
      };

      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [Cart, dispatchCartAction] = useReducer(cartReducerFunction, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItem(id) {
    console.log(id);
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  }

  function increaseItem(id) {
    dispatchCartAction({ type: "INCREASE", id: id });
  }

  function decreaseItem(id) {
    dispatchCartAction({ type: "DECREASE", id: id });
  }

  const CartCtxValue = {
    items: Cart.items,
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
  };
  return (
    <CartContext.Provider value={CartCtxValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
