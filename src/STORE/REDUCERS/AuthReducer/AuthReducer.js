// import { createStore } from "redux";

const initialState = {
	token: null,
};

export const setToken = (dispatch, value) => {
	dispatch({
		type: "SET_TOKEN",
		payload: {
			token: value,
		},
	});
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TOKEN":
			return {
				...state,
				token: action.payload.token,
			};

		case "REMOVE_TOKEN":
			return {
				...state,
				token: null,
			};

		default:
			return state;
	}
};

// const AuthStore = createStore(AuthReducer, initialState);

export default AuthReducer;
