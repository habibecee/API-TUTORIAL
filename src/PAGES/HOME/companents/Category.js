import React from "react";

const Category = (props) => {
	return (
		<div className="col">
			<div
				className="card mb-5 rounded-3 border-warning"
				style={{
					width: "250px",
					height: "320px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					boxShadow: "0 0 8px 10px #2C3639",
				}}
			>
				<div
					className="card-header py-3 text-white bg-warning border-warning "
					style={{
						width: "100%",
						height: "70px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<a
						href={"#/category/" + props.categoryProp.slug}
						className="my-0 fw-normal text-decoration-none"
						style={{
							color: "#7027A0",
							textAlign: "center",
							fontSize: "20px",
							textShadow: "0 0 5px #F1F1F1, 0 0 5px #64DFDF",
						}}
					>
						{props.categoryProp.name}{" "}
					</a>
				</div>
				<div className="card-body mt-2">
					<img
						src={props.categoryProp.image}
						style={{
							width: "100%",
							height: "200px",
							padding: "5px 0",
							marginBottom: "5px",
							boxShadow: "0 0 3px 5px #2C3639",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
