import { Flip } from "react-awesome-reveal";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

import './hero.css';

const Hero = () => {

	return (
		<div id="hero" className="md:min-h-[600px] md:h-[100vh] md:max-h-[750px] flex justify-center items-center w-[100%] p-6 max-sm:p-6 max-md:h-[500px] max-md:p-8 max-sm:min-h-[100vh] max-sm:h-[fit-content] bg-white">
			<Flip direction="vertical" duration={2500} className=" w-full h-full flex justify-center items-center " >
				<div className="rounded-[40px] max-sm:rounded-[25px] bg-[whitesmoke] w-full h-full shadow-2xl flex justify-center items-center max-sm:p-12">
					<div className="flex flex-row gap-20 max-lg:gap-4 max-md:gap-[0.1px] max-sm:gap-[0.1px] justify-center max-sm:items-center max-sm:flex-col">
						<div className="items-center flex flex-col px-12 lg:w-[320px] max-lg:w-[320px] lg:h-[420px] max-md:h-[350px] text-center py-12 gap-6 justify-center max-md:scale-[80%] max-sm:scale-100 max-sm:w-[280px] max-sm:p-0 max-[360px]:w-[250px]">
							<h1 className="text-3xl font-bold leading-7">
								<span>Emmanuel</span> <br/>
								<span className="">Gideon-dada </span>
							</h1>
							<h2 className=" text-xl font-bold">Software Developer</h2>
							<div className="flex flex-row gap-6">
								<FaLinkedinIn size={25} className="bg-black rounded-md p-[2px] cursor-pointer" color="white" />
								<FaGithub size={25} color="black" className="cursor-pointer" />
								<FaWhatsapp size={25} color="white" className="bg-black rounded-md p-[2px] cursor-pointer"/>
							</div>
							<p className="text-lg font-semibold">Delivering scalable, high-performance applications with a full-stack approach to Modern Web Solutions.</p>
						</div>
						<div className="lg:h-[420px] max-md:h-[350px] lg:w-[350px] max-lg:w-[300px] max-md:scale-[85%] max-md:ml-[-40px] max-sm:ml-[0px] max-sm:scale-100 max-sm:w-[300px] max-sm:h-[400px] max-[360px]:w-[255px] max-[360px]:h-[350px] bg-image bg-cover bg-no-repeat herobg"></div>
					</div>
				</div>
			</Flip>
		</div>
	);
};

export default Hero;
