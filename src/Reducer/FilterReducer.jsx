export const initialReducerValue = {
        category: [], products: [], sortBy: null, filterByPrice: [],
        hasClearAll:false
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
                                ...state, filterByPrice: isSetPayLoad ? [...state.filterByPrice, payLoad]
                                        : state.filterByPrice.filter(item => item !== payLoad)
                                        ,hasClearAll:false
                        }
                case "CLEAR_ALL":
                        return {
                                ...state,filterByPrice:[],sortBy:null,category:[],hasClearAll:true
                        }
                default:
                        return state;
        }

}