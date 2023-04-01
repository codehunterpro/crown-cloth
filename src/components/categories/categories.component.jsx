import Category from "../category/category.component";
import "./categories.styles.scss";

const Categories = ({categories}) => {
  return (
   
      <div className="categories-container">
        {categories.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    
  );
};

export default Categories;