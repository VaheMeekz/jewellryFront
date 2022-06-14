import {
    NEW_PRODUCT_GET,
    PRODUCT_CATEGORY_GET,
    PRODUCT_DETAIL_GET,
    PRODUCT_FILTER_GET,
    PRODUCT_GET,
    PRODUCT_SLIDER
} from "../types";
import {newProductData, productSliderData} from "../Utils/productSLiderUtils";
import  axios  from 'axios';
import {backUrl} from "../../Config/keys";


export const product_category_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/category`)
            .then(function (response) {
                dispatch({type: PRODUCT_CATEGORY_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const product_get = (offset, limit) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/product`, {params: {offset, limit}})
        .then(function (response) {
            dispatch({type: PRODUCT_GET, payload: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

export const productSlider_get = (id) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/product`, {params: {categoryId: id}})
            .then(function (response) {
                dispatch({type: PRODUCT_SLIDER, payload: response.data.products})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const newProduct_get = () => {
    return dispatch => {
        dispatch({type: NEW_PRODUCT_GET, payload: newProductData})
    }
}

// export const filterAction = (name) => {
//     return dispatch => {
//         axios.get('/user', {
//             firstName: 'Fred',
//             lastName: 'Flintstone'
//         })
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         dispatch({type: PRODUCT_FILTER_GET, payload: name})
//     }
// }

export const detailAction = (id) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/product/single`, {params: {id: id}})
            .then(function (response) {
                dispatch({type: PRODUCT_DETAIL_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}