import { combineReducers } from "redux";
import usersReducer from "./users-reducer";
import counterReducer from "./counter-reducer";

export default combineReducers({
    usersReducer,
    counterReducer
})
