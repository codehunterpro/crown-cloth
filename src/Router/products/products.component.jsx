import { Routes, Route } from "react-router-dom";
import Category from "../procategory/Procategory.component";
import AllCategoriesPreview from "../allcategoriespreview/all-categories-preview.component";



const Shop = ()=> {
  return (
   
    <Routes>
     <Route index element={<AllCategoriesPreview/>}/>
     <Route path=":category" element={<Category/>}/>
    </Routes>
     
    
  )
}


export default Shop;