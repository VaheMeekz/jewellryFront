import {CONTACT_GET, HOME_BANNER_GET, HOME_FOOTER_GET, HOME_SLIDER_GET} from "../types";

const initialState = {
    homeSlider: [],
    homeBanner: [],
    homeFooter: [],
    contactData: []
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {

        case HOME_SLIDER_GET:

            return {...state, homeSlider: action.payload}

        case HOME_BANNER_GET:

            return {...state, homeBanner: action.payload}

        case HOME_FOOTER_GET:

            return {...state, homeFooter: action.payload}

        case CONTACT_GET:

            return {...state, contactData: action.payload}

        default:
            return state;
    }
}