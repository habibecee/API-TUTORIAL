import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import useApi from "../../HOOKS/UseApi";
import Service from "./companents/Service";

const CategoryDetail = (props) => {
	const params = useParams();
	const api = useApi();
	const [categoryDetails, setCategoryDetails] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log("params", params);

	useEffect(() => {
		api
			.get(`public/categories/getBySlug/${params.slug}`)
			.then((response) => {
				console.log("slugg response", response.data.data);
				setCategoryDetails(response.data.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log("err", err);
			});
	}, []);

	return (
		<div>
			<div>
				{loading ? (
					<img
						src="loadingg2.gif"
						style={{
							width: "300px",
							height: "300px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							marginLeft: "300px",
						}}
					/>
				) : (
					<div>
						<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
							<h1 className="display-4 fw-normal"> CATEGORY'S DETAILS </h1>
							<p className="fs-5 text-muted">{`THERE IS THE CATEGORY OF ${categoryDetails.name} DETAILS.`}</p>
						</div>
						<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
							<Fragment>
								{categoryDetails.services.map((service) => {
									return <Service key={service.id} serviceProp={service} />;
								})}
							</Fragment>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CategoryDetail;
