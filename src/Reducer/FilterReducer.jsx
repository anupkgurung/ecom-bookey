export const initialReducerValue = {
        category: [], products: [], sortBy: null, filterByPrice: 0,
        hasClearAll:false,
        productList:[]
}

export const FilterReducer = (state, { type, payLoad, isSetPayLoad }) => {        
        switch (type) {
                case "SET_PRODUCT":
                        return { ...state, products: payLoad,hasClearAll:false }

                case "CATEGORY":
                        return {
                                ...state, category: isSetPayLoad ? [...state.category, payLoad]
                                        : state.category.filter(item => item !== payLoad)
                                        ,hasClearAll:false
                        }

                case "LOW_TO_HIGH":
                        return { ...state, sortBy: payLoad,hasClearAll:false }

                case "HIGH_TO_LOW":
                        return { ...state, sortBy: payLoad ,hasClearAll:false}

                case "FILTER_BY_PRICE":
                        return {
                                ...state, filterByPrice: payLoad
                                        ,hasClearAll:false
                        }
                case "CLEAR_ALL":
                        return {
                                ...state,filterByPrice:[],sortBy:null,category:[],hasClearAll:true
                        }
                case "PRODUCT_LIST":
                        return {
                                ...state, productList : payLoad,hasClearAll:false 
                        }
                default:
                        return state;
        }

}