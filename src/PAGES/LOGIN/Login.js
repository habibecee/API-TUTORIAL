import React, { useState } from "react";
import useApi from "../../HOOKS/UseApi";
import { connect } from "react-redux";
import { SET_TOKEN } from "../../STORE/REDUCERS/AuthReducer/AuthReducer";

const Login = (props) => {
	console.log(">>> LOGIN PAGE PROPS", props);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const api = useApi();

	const onLoginClick = () => {
		const postData = {
			email,
			password,
		};
		console.log(">> POST DATA", postData);

		api
			.post("auth/login", postData)
			.then((response) => {
				console.log(">> RES", response);
				console.log(">> TOKEN", response.data.data.token);

				if (response.data.status === "success") {
					localStorage.setItem("token", response.data.data.token);

					const action = {
						type: SET_TOKEN,
						payload: { token: response.data.data.token },
					};
					props.dispatch(action);

					window.location.href = "/#";

					setTimeout(() => {
						window.location.reload();
					}, 111);
				} else {
					alert("Hatalı eposta veya şifre girildi.");
				}
			})
			.catch((err) => {
				console.log(">> ERR", err);
				alert(err.response.data.errorMessage);
			});
	};
	return (
		<div>
			<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
				<h1 className="pageText display-4 fw-normal"> LOG IN </h1>
				<p className="fs-5 text-muted">
					HI! WELCOME TO API TUTORIAL LOG IN PAGE. <br /> PLEASE ENTER YOUR
					ACCOUNTS' INFORMATION.
				</p>
			</div>
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						marginLeft: "320px",
					}}
					className=""
				>
					<div className="mb-4 row d-flex flex-column align-items-start ">
						<div className="">
							<label className="col-sm-2 col-form-label">Email</label>
						</div>
						<div className="col-sm-7">
							<input
								type="text"
								className="form-control"
								placeholder="you@example.com"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-4 row d-flex flex-column align-items-start">
						<div>
							<label className="col-sm-2 col-form-label">Password</label>
						</div>
						<div className="col-sm-7">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div style={{ marginLeft: "590px" }} className="">
					<button
						type="button"
						className="loginBtn btn btn-primary"
						onClick={onLoginClick}
					>
						LOG IN
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(">>> LOGIN MAP STATE", state);

	return {
		...state,
	};
};

export default connect(mapStateToProps)(Login);
