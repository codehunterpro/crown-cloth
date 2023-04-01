import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss"
import CheckOutItem from "../../components/checkoutItem/chekout-item.component";

const CheckOut = () => {
  const { cartItems } =
    useContext(cartContext);

  const totalAmmountOfCost = () => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.totalPrice, 0);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
   
        <div className="header-block">
          <span >Remove</span>
        </div>
      </div>

      
        {cartItems.map((item) => {
          
        return <CheckOutItem key={item.id} item={item}/>
      
        })}
        <span className='total'>TOTAL: {totalAmmountOfCost()}</span>
      </div>    
    
  );
};

export default CheckOut;
