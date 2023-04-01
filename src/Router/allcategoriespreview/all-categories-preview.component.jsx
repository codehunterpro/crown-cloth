import { useContext } from "react";
import { categoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from "../../components/categoriesPreview/categories-preview.component";


const AllCategoriesPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        
        return (
          <CategoriesPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default AllCategoriesPreview;
