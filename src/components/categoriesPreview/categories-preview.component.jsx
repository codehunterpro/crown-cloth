import './categories-preview.styles.scss';
import ProductCard from '../productCard/product-card.component';
import { Link } from 'react-router-dom';
const CategoriesPreview = ({title,products})=> {
    

    return (
        <div className='category-preview-container'>
       <h2>
       <Link to={title} className='title'>{title.toUpperCase()}</Link>
       </h2>

       <div className="preview">
       {
        products.filter((_, idx)=> idx < 4 ).map((product)=> {
            return (
               <ProductCard key={product.id} product={product}/> 
            )
        })
       }
       
       </div>
        
        </div>
    )
}

export default CategoriesPreview;