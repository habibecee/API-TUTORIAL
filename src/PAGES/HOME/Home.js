import React, { useEffect, useState } from "react";
import useApi from "../../HOOKS/UseApi";
import Category from "./companents/Category";
import { useDispatch, connect } from "react-redux";
import { setToken } from "../../STORE/REDUCERS/AuthReducer/AuthReducer";

const Home = (props) => {
	const [categories, setCategories] = useState([]);
	console.log("HOME OBJECT", props, categories);

	const api = useApi();
	const dispatch = useDispatch();

	useEffect(() => {
		api
			.get("public/categories/listMainCategories")
			.then((response) => {
				console.log("category response", response);
				setCategories(response.data.data);
			})
			.catch((error) => {
				console.log("error category", error);
			});
	}, []);

	const onChange = (event) => {
		setToken(dispatch, event.target.value);
	};

	return (
		<div>
			<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
				<h1 className="pageText display-4 fw-normal">HOME</h1>
				<p className="fs-5 text-muted">HI! WELCOME TO API TUTORIAL. </p>
			</div>
			<div className="mb-5 me-3 d-flex align-items-center justify-content-center ">
				<input
					type="text"
					onChange={onChange}
					style={{
						width: "300px",
						borderRadius: "15px",
						boxShadow: "0 0 8px 5px #594545",
						backgroundColor: "#D7C0AE",
						color: "#000",
						padding: "6px",
						border: "none",
					}}
				/>
			</div>
			<div className="d-flex flex-column align-items-center justify-content-center mb-2">
				<h5>
					<span> TOKEN: </span> {props.AuthState.token}{" "}
				</h5>
			</div>
			<div className="row row-cols-1 row-cols-md-3 mb-3 ms-3 text-center">
				{categories?.map((category) => {
					return <Category key={category.id} categoryProp={category} />;
				})}
			</div>

			<h2 className="display-6 text-center mb-4">Compare plans</h2>

			<div className="table-responsive">
				<table className="table text-center">
					<thead>
						<tr>
							<th style={{ width: "34%" }}></th>
							<th style={{ width: "22%" }}>Free</th>
							<th style={{ width: "22%" }}>Pro</th>
							<th style={{ width: "22%" }}>Enterprise</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" className="text-start">
								Public
							</th>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Private
							</th>
							<td></td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<th scope="row" className="text-start">
								Permissions
							</th>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Sharing
							</th>
							<td></td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Unlimited members
							</th>
							<td></td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Extra security
							</th>
							<td></td>
							<td></td>
							<td>
								<i className="fa-sharp fa-solid fa-scarecrow"></i>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

const MapStateToPropsFunc = (state) => {
	console.log("HOME MAP STATE", state);
	/*	
STATE DEĞERİ:
    {
		AppDataState: OBJECT,
		AuthState: OBJECT,
	} */

	return {
		//...state,
		AuthState: state.AuthState,
	};
};

export default connect(MapStateToPropsFunc)(Home);
