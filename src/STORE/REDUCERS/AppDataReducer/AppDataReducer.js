// import { createStore } from "redux";

const initialState = {
	appData: null,
};

const AppDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_APP_DATA":
			return {
				...state,
				AppData: action.payload.token,
			};

		case "REMOVE_APP_DATA":
			return {
				...state,
				AppData: null,
			};

		default:
			return state;
	}
};

// const AppDataStore = createStore(AppDataReducer, initialState);

export default AppDataReducer;
