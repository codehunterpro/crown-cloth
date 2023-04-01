import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/productCard/product-card.component";
import "./Procategory.styles.scss";
import { Fragment } from "react/cjs/react.production.min";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(categoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="procategory-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
