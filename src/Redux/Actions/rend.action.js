import axios from "axios";
import {backUrl} from "../../Config/keys";
import {GET_PORTFOLIO_IMAGES, GET_PORTFOLIO_VIDEOS} from "../types";


export const portfolioGetImagesAC = (page,limit) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/portfolio/image`, {params: {offset: page, limit: limit}})
            .then(function (response) {
                dispatch({type: GET_PORTFOLIO_IMAGES, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const portfolioGetVideosAC = (page,limit) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/portfolio/video`, {params: {offset: page, limit: limit}})
            .then(function (response) {
                dispatch({type: GET_PORTFOLIO_VIDEOS, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}