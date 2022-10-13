import { combineReducers } from "redux";
import AppDataReducer from "./AppDataReducer/AppDataReducer";
import AuthReducer from "./AuthReducer/AuthReducer";

const Reducers = combineReducers({
	AppDataState: AppDataReducer,
	AuthState: AuthReducer,
});

export default Reducers;
