import React, { useState } from "react";

const Home = () => {
	const [lightColor, setLightColor] = useState("");

	return (
		<div id="container">
			<div className="trafficTop"></div>
			<div className="trafficBox">
				<div
					className={lightColor === "red" ? "red redOff" : "redOff"}
					onClick={() => {
						setLightColor("red");
					}}></div>
				<div
					className={
						lightColor === "orange"
							? "orange orangeOff"
							: "orangeOff"
					}
					onClick={() => {
						setLightColor("orange");
					}}></div>
				<div
					className={
						lightColor === "green" ? "green GreenOff" : "greenOff"
					}
					onClick={() => {
						setLightColor("green");
					}}></div>
			</div>
		</div>
	);
};

export default Home;

