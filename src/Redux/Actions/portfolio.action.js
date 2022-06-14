import {PORTFOLIO_BANNER_GET, PORTFOLIO_GET} from "../types";
import axios from "axios";
import {backUrl} from "../../Config/keys";

export const portfolio_get = (page,limit) => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/video`, {params: {offset: page, limit: limit}})
            .then(function (response) {
                dispatch({type: PORTFOLIO_GET, payload: response.data})
                })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export const portfolio_banner_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/videoBanner`)
            .then(function (response) {
                dispatch({type: PORTFOLIO_BANNER_GET, payload: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}