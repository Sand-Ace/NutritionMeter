import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
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
      updatedItems.push({ ...action.item, id: action.item.title });
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

  const CartCtxValue = {
    items: Cart.items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={CartCtxValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
