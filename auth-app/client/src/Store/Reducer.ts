import {combineReducers} from "redux";
import AuthSlice from "@/Store/Reducers/Auth/AuthSlice";

const rootReducer = combineReducers({
    auth: AuthSlice
})

export default rootReducer;
