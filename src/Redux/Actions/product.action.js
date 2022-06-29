import {
    PRODUCT_CATEGORY_GET,
    PRODUCT_DETAIL_GET,
    PRODUCT_GET,
    PRODUCT_SLIDER, PRODUCT_TEXT_GET
} from "../types";
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

export const productTextAC = (id) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/text`, )
            .then(function (response) {
                dispatch({type: PRODUCT_TEXT_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}