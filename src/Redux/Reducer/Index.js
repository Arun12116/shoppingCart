import { combineReducers } from "redux";
import { productReaducer } from "./ProductReducer";
import { singleProductReducer } from "./ProductReducer";

const reducer = combineReducers({
    allproduct: productReaducer,
    singleproduct: singleProductReducer

})

export default reducer