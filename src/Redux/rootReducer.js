import {combineReducers} from "redux";
import {productReducer} from "./Reducers/productReducer";
import {aboutReducer} from "./Reducers/aboutReducer";
import {homeReducer} from "./Reducers/homeReducer";
import {portfolioReducer} from "./Reducers/portfolioReducer";

export const rootReducer = combineReducers({
    productReducer,
    aboutReducer,
    homeReducer,
    portfolioReducer
});