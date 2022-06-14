import {ABOUT_DOWN_GET, ABOUT_UP_GET} from "../types";
import {aboutUpData, aboutUpDown} from "../Utils/aboutUtils";
import axios from "axios";
import {backUrl} from "../../Config/keys";

export const aboutUp_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/aboutUs/up`)
            .then(function (response) {
                dispatch({type: ABOUT_UP_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const aboutDown_get = () => {
    return dispatch => {
        axios.get(`${backUrl}/api/v1/aboutUs/down`)
        .then(function (response) {
            dispatch({type: ABOUT_DOWN_GET, payload: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}