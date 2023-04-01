import { useContext } from "react";

import { cartContext } from "../../contexts/cart.context";

import { CartIconContainer, IconBag,ItemCount } from "./cart-icon.styles";
const CartIcon = () => {

const {toggle,setToggle,cartItems} = useContext(cartContext);

const cartHandler = ()=> setToggle(!toggle);

  return (
    <CartIconContainer onClick={cartHandler}>
      <IconBag  />
      <ItemCount>{cartItems.reduce((acc,item)=> acc + item.quantity,0)}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
