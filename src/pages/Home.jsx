// import { useState } from "react";
import { Hero, About, Experience, Projects } from "../sections";


const Home = () => {

	return (
		<div id="home" className="max-w-[100vw] h-[fit-content] flex flex-col bg-white">
			<Hero />
			<About />
			<Experience />
			<Projects />
		</div>
	);
};

export default Home;
