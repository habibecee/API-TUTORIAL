import React, { useEffect, useState } from "react";
import useApi from "../../HOOKS/UseApi";

const Home = (props) => {
	const [categories, setCategories] = useState([]);
	const api = useApi();

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

	return (
		<div>
			<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
				<h1 className="display-4 fw-normal">HOME</h1>
				<p className="fs-5 text-muted">
					HI! WELCOME TO API TUTORIAL. <br /> PLEASE LOG IN FIRST TO PERFORM ON
					THE TRANSACTIONS
				</p>
			</div>
			<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
				{categories?.map((category) => {
					return (
						<div className="col">
							<div
								className="card mb-4 rounded-3 shadow-sm border-primary"
								style={{
									width: "250px",
									height: "300px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
								}}
							>
								<div
									className="card-header py-3 text-white bg-primary border-primary"
									style={{ width: "100%", height: "50px" }}
								>
									<h4 className="my-0 fw-normal">{category.name} </h4>
								</div>
								<div className="card-body mt-2">
									<img src={category.image} style={{ width: "100%" }} />
								</div>
							</div>
						</div>
					);
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
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Private
							</th>
							<td></td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<th scope="row" className="text-start">
								Permissions
							</th>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Sharing
							</th>
							<td></td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Unlimited members
							</th>
							<td></td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
						</tr>
						<tr>
							<th scope="row" className="text-start">
								Extra security
							</th>
							<td></td>
							<td></td>
							<td>
								<i className="fa-solid fa-check"></i>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
