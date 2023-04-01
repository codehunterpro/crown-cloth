import { useContext } from "react";
import "./checkout-item.styles.scss";
import { cartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ item }) => {
  const { clearCartItem, addItemToCart, removeItemFromCart, } = useContext(cartContext);

  const itemForAddHandler = ()=> {
    addItemToCart(item)
  }

  const itemForRemoveHandler = ()=> {
    removeItemFromCart(item)
  }

  const itemForClearHandler = ()=> {
    clearCartItem(item)
  }

  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={itemForRemoveHandler} className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={itemForAddHandler} className="arrow">&#10095;</div>
      </span>
      <span className="price">X {price}</span>

      <div onClick={itemForClearHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
