import "./product-card.styles.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../buttons/buttons.component";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";


const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const {addItemToCart}= useContext(cartContext);

 
 

  return (
    <div className="product-card-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="footer">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={()=>addItemToCart(product)}>ADD TO CART</Button>
    </div>
  );
};
export default ProductCard;
