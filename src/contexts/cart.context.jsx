import { createContext, useState } from "react";

const removeForItem = (cartItems, removeItem) => {

  return cartItems.filter(item => item.id !== removeItem.id)
}



const addCartItem = (cartItems, productToAdd) => {
  const IfItemExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (IfItemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: (cartItem.price *( cartItem.quantity+1)),
          }
        : cartItem
    );
  }

  return [
    ...cartItems,
    { ...productToAdd, quantity: 1, totalPrice: productToAdd.price },
  ];
};




const removeCartItem = (cartItems, productToRemove) => {
  const ifExist = cartItems.find((item) => item.id === productToRemove.id);

  if (ifExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: item.price *( item.quantity -1),
        }
      : item
  );
};






export const cartContext = createContext({
  toggle: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCartItem: ()=> {}
});

const CartContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const clearCartItem = (removeItem) => {
    setCartItems(removeForItem(cartItems, removeItem));
    
    }
    

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    toggle,
    setToggle,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCartItem
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
