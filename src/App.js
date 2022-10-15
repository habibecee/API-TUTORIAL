import "./App.css";
import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./COMPONENTS/Header/Header";
import Footer from "./COMPONENTS/Footer/Footer";
import Home from "./PAGES/HOME/Home";
import Login from "./PAGES/LOGIN/Login";
import Register from "./PAGES/REGISTER/Register";
import useApi from "./HOOKS/UseApi";
import CategoryDetail from "./PAGES/CATEGORY_DETAIL/CategoryDetail";
import { connect } from "react-redux";
import { SET_APP_DATA } from "./STORE/REDUCERS/AppDataReducer/AppDataReducer";

function App(props) {
	const api = useApi();

	if (props.AuthState.token && !props.AppDataState.AppData) {
		//APP DATA BİLGİSİ ALINACAK
		api
			.get("user/appData")
			.then((res) => {
				console.log(" RES APDATA", res);

				const action = {
					type: SET_APP_DATA,
					payload: res.data.data,
				};

				props.dispatch(action);
			})
			.catch((err) => {
				console.log("APPDATA ERR", err);
			});
	}

	return (
		<div className="container py-3">
			<Header />
			<HashRouter>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="login" element={<Login />}></Route>
					<Route path="register" element={<Register />}></Route>
					<Route path="category/:slug" element={<CategoryDetail />}></Route>
				</Routes>
			</HashRouter>
			<Footer />
		</div>
	);
}

const MapProps = (state) => {
	return {
		...state,
	};
};

export default connect(MapProps)(App);
