import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./reducers/BaiTapOanTuXiReducer";
const rootReducer = combineReducers({
    BaiTapOanTuXiReducer
});

export const store = createStore(rootReducer);