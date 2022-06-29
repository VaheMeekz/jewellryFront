import {combineReducers} from "redux";
import {productReducer} from "./Reducers/productReducer";
import {aboutReducer} from "./Reducers/aboutReducer";
import {homeReducer} from "./Reducers/homeReducer";
import {portfolioReducer} from "./Reducers/portfolioReducer";
import {rendReducer} from "./Reducers/rendReducer";

export const rootReducer = combineReducers({
    productReducer,
    aboutReducer,
    homeReducer,
    portfolioReducer,
    rendReducer
});