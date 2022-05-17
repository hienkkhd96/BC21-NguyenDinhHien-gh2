import { combineReducers } from "redux";
import { sanPhamReducer } from "./sanPhamReducer.js";

const rootReducers = combineReducers ({
    sanPham: sanPhamReducer,
})
export default rootReducers