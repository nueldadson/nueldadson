// import { useState } from "react";
import { Hero, About } from "../sections";


const Home = () => {

	return (
		<div id="home" className="max-w-[100vw] h-[fit-content] flex flex-col bg-white">
			<Hero />
			<About />
		</div>
	);
};

export default Home;
