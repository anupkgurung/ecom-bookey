import { useContext, createContext, useReducer } from "react";
import { initialReducerValue ,FilterReducer } from "../../Reducer";

const ProductContext = createContext();

const filterCategory =(state,productList) => {
    return state.category.length > 0 ? [...productList].filter(({categoryName}) =>  state.category.includes(categoryName))
        : productList
}

const soryByPrice = (state,productList) => {
    switch (state.sortBy){
         case "HIGH" :
         return [...productList].sort((a,b) => b.price - a.price)
        
         case "LOW" :
         return [...productList].sort((a,b) => a.price - b.price)
         
         default :
         return productList
    }
}

const filterByPrice = (state, productList) => {
    return state.filterByPrice >0 ? [...productList].filter(
        ({price}) => Number(price) <= state.filterByPrice )
        : productList
}

const ProductProvider = ({children}) => {

    const [finalProductList , dispatchProductList] = useReducer(FilterReducer, initialReducerValue)
    
    const categoryItems = filterCategory(finalProductList,finalProductList.products);

    const priceFilteredItems = filterByPrice(finalProductList,categoryItems)

    const sortedItems = soryByPrice(finalProductList,priceFilteredItems);
    
    return (
        <ProductContext.Provider value={{sortedItems,finalProductList,dispatchProductList}}>
            {children}
        </ProductContext.Provider>
    )
}

const useFilter = () => useContext(ProductContext);

export {ProductProvider , useFilter}