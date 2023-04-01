import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import Button from "../buttons/buttons.component";
import "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { toggle, cartItems } = useContext(cartContext);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };

  return (
    toggle && (
      <CartDropdownContainer>
        <CartItems>
          {!cartItems.length ? (
            <EmptyMessage>NO ITEMS ADDED TO CART</EmptyMessage>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </CartItems>

        <Button onClick={navigateHandler}> Go To Chekout</Button>
      </CartDropdownContainer>
    )
  );
};

export default CartDropdown;
