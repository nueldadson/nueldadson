// import { useState } from "react";
import { Hero, About, Experience } from "../sections";


const Home = () => {

	return (
		<div id="home" className="max-w-[100vw] h-[fit-content] flex flex-col bg-white">
			<Hero />
			<About />
			<Experience />
		</div>
	);
};

export default Home;
