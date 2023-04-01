import "./category.styles.jsx";
import { useNavigate } from "react-router-dom";
import { CategoryContainer, CategoryBodyContainer,
BackgroundImage } from "./category.styles.jsx";

const Category = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
 
  const navigateHandler = ()=> {
    navigate(`/shop/${title}`)
  }
 
  return (
    <CategoryContainer onClick={navigateHandler}  >
      <BackgroundImage
        className="background-image"
        imageURL = {imageUrl}
      />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default Category;
