import { createStore } from "redux";
import Reducers from "./REDUCERS/CombineReducer";

const Store = createStore(Reducers);

export default Store;
