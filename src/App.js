import "./App.css";
import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./COMPONENTS/Header/Header";
import Footer from "./COMPONENTS/Footer/Footer";
import Home from "./PAGES/HOME/Home";
import Login from "./PAGES/LOGIN/Login";
import Register from "./PAGES/REGISTER/Register";
import useApi from "./HOOKS/UseApi";

function App() {
	// const api = useApi();

	// api
	// 	.get("user/appData")
	// 	.then((response) => {
	// 		console.log("APP DATA", response);
	// 	})
	// 	.catch((error) => {
	// 		console.log("ERROR", error);
	// 	});

	return (
		<div className="container py-3">
			<Header />
			<HashRouter>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="login" element={<Login />}></Route>
					<Route path="register" element={<Register />}></Route>
				</Routes>
			</HashRouter>
			<Footer />
		</div>
	);
}

export default App;
