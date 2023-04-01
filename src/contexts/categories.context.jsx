import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";


export const categoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: ()=> [],
   
});

const CategoriesContextProvider = ({children})=> {
   
    const [categoriesMap, setCategoriesMap] = useState({});
   
    useEffect(()=> {
        const getCategoriesMap = async ()=> {
            const categories = await getCategoriesAndDocuments();
            setCategoriesMap(categories)
          
           
        }  
        getCategoriesMap();
      },[]);
  

    const value = {categoriesMap,setCategoriesMap};

    return <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
}

export default CategoriesContextProvider;