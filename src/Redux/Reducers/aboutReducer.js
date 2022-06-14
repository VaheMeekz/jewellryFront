import {ABOUT_DOWN_GET, ABOUT_UP_GET} from "../types";

const initialState = {
    aboutUpData: [],
    aboutDownData: []
}

export const aboutReducer = (state = initialState, action) => {
    switch (action.type) {

        case ABOUT_UP_GET:

            return {...state, aboutUpData: action.payload};

        case ABOUT_DOWN_GET:

            return {...state, aboutDownData: action.payload}

        default:
            return state;
    }
}