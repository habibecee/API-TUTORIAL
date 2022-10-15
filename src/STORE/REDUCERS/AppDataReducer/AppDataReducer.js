const initialState = {
	appData: null,
};

export const SET_APP_DATA = "SET_APP_DATA";
export const REMOVE_APP_DATA = "REMOVE_APP_DATA";

const AppDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_APP_DATA:
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

export default AppDataReducer;
