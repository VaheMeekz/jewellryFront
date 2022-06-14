import {
    NEW_PRODUCT_GET,
    PRODUCT_CATEGORY_GET,
    PRODUCT_DETAIL_GET,
    PRODUCT_FILTER_GET,
    PRODUCT_GET,
    PRODUCT_SLIDER
} from "../types";

const initialState = {
    products: [],
    productSlider: [],
    newProductData: [],
    filtersItem: [],
    detail: [],
    categories: [],
    count: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case PRODUCT_GET:

            return {...state, products: action.payload.products, count: action.payload.count}

        case PRODUCT_SLIDER:

            return {...state, productSlider: action.payload}

        case NEW_PRODUCT_GET:

            return {...state, newProductData: action.payload}

        case PRODUCT_FILTER_GET:

            let newProd = state.products.filter((item) => { //<---- like this
                if (item.categoryName === action.payload) {
                    return item;
                }
            });

            return {...state, filtersItem: newProd}

        case PRODUCT_DETAIL_GET:

            return {...state, detail: action.payload}

        case PRODUCT_CATEGORY_GET:

            return {...state, categories: action.payload}

        default:
            return state;
    }
}