 import {PORTFOLIO_BANNER_GET, PORTFOLIO_GET} from "../types";

const initialState = {
    data: [],
    count: null,
    videoImg: []
}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {

        case PORTFOLIO_GET:

            return {...state, data: action.payload.videos, count: action.payload.count}

        case PORTFOLIO_BANNER_GET:

            return {...state, videoImg: action.payload}

        default:
            return state;
    }
}

