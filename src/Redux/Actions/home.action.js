import axios from "axios";
import {backUrl} from "../../Config/keys";
import {CONTACT_GET, HOME_BANNER_GET, HOME_FOOTER_GET} from "../types";

export const home_slider_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/homeBanner`)
            .then(function (response) {
                dispatch({type:HOME_BANNER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const home_footer_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/homeFooter`)
            .then(function (response) {
                dispatch({type: HOME_FOOTER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const contact_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/contacts`)
            .then(function (response) {
                dispatch({type: CONTACT_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}