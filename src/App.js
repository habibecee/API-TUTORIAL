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
import {
	REMOVE_APP_DATA,
	SET_APP_DATA,
} from "./STORE/REDUCERS/AppDataReducer/AppDataReducer";
import { REMOVE_TOKEN } from "./STORE/REDUCERS/AuthReducer/AuthReducer";

function App(props) {
	const api = useApi();

	if (props.AuthState.token && !props.AppDataState.AppData) {
		/* TOKEN VAR APPDATA YOK İSE APPDATA BİLGİSİNİ APIDEN AL. 
		   BU ŞART VERİLMEZSE SÜREKLİ APPDATAYA İSTEK ATACAĞINDAN SİSTEM TIKANIR. 
		   VERİLEN ŞARTIN KENDİNİ TEKRAR ETMEYECEĞİ ŞEKİLDE YA SAYFA YENİLENDİĞİNDE 
		   VEYA TOKEN SET EDİLDİĞİNDE TEKRAR ÇALIŞACAK ŞEKİLDE AYARLANMALIDIR. */
		api
			.get("user/appData")
			.then((response) => {
				console.log(" response APDATA", response);

				const action = {
					type: SET_APP_DATA,
					payload: {
						AppData: response.data.data,
					},
				};

				props.dispatch(action);
			})
			.catch((err) => {
				console.log("APPDATA ERR", err);

				if (err.response.data.status === "error") {
					if (err.response.data.exceptionType === "UserNotLoggedInException") {
						/* LOCAL STORAGEDAKİ TOKEN INVALİD DEMEKTİR. BU SEBEPLE SİLİNMESİ GEREKİR  */
						localStorage.removeItem("token");

						const action = {
							type: REMOVE_TOKEN,
						};

						props.dispatch(action);
						window.location.href = "/#";

						const ActionAppData = {
							type: REMOVE_APP_DATA,
						};

						props.dispatch(ActionAppData);
					}
				} else {
					/* GENEL HATA MESAJLARI YAZILACAK */

					alert("HATA OLUŞTU. LÜTFEN DAHA SONRA TEKRAR DENEYİNİZ!");
				}
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
