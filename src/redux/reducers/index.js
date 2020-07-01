import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
const reducers = combineReducers({
    // counterReducer:counterReducer
    //reducerları burda toplıyoruz
    counterReducer 
});
export default reducers;