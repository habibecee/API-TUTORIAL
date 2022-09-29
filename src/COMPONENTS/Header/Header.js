import React, { useEffect, useState } from "react";
import logo from "../Header/logo.png";
import useApi from "../../HOOKS/UseApi";

const Header = () => {
	const api = useApi();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			api
				.get("user/appData")
				.then((response) => {
					console.log(">> APP DATA RESP", response);
					setUser(response.data.data.user);
				})
				.catch((err) => {
					console.log(">> ERR", err);
				});
		}
	}, []);

	const onClickLogOut = () => {
		api
			.get("auth/logout")
			.then((res) => {
				console.log("res", res);
			})
			.catch((err) => {
				console.log("err", err);
			})
			.finally(() => {
				localStorage.removeItem("token");
				window.location.href = "/#";
				setTimeout(() => {
					window.location.reload();
				}, 111);
			});
	};

	return (
		<header>
			<div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
				<a
					href="#/"
					className="d-flex align-items-center text-dark text-decoration-none"
				>
					<img
						src={logo}
						style={{ borderRadius: "50%", width: "80px", height: "80px" }}
						className="me-3"
						alt="logo"
					></img>
					<span className="fs-4">Api Tutorial</span>
				</a>

				{user ? (
					<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
						<strong className="btn btn-primary me-3 py-2">
							{user.fullname}
						</strong>
						<button
							className="btn btn-primary me-3 py-2"
							onClick={onClickLogOut}
						>
							Log Out
						</button>
					</nav>
				) : (
					<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
						<a className="btn btn-primary me-3 py-2" href="#/login">
							Login
						</a>
						<a className="btn btn-primary me-3 py-2" href="#/register">
							Register
						</a>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
