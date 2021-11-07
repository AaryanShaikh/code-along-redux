import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import {
    combineReducers
} from "redux";

const rootReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
})
export default rootReducers