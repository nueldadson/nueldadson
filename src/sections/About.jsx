import { Fade } from "react-awesome-reveal";
import { epimg, edimg } from "../assets/images";
import './about.css';
import { SkillTab } from "../components";

const About = () => {

  return (
    <div id='about' className="h-[fit-content] flex justify-center items-center w-[100%] p-6 max-sm:p-6 max-md:p-8 bg-white">
      <Fade direction="in" duration={1500} className="w-full h-fit flex justify-center items-center" >
				<div className="rounded-[40px] max-sm:rounded-[25px] text-center bg-[white] w-full h-[inherit] shadow-2xl flex p-6 max-[370px]:p-2">
          <div className="flex flex-col w-full h-fit py-14">
            <div className=" flex flex-col">
              <span className="text-lg mb-3">
                Get To Know More
              </span>
              <h1 className="text-4xl mt-[-10px] font-bold normal-case">
                About Me
              </h1>
            </div>
            <div className="flex flex-row w-full justify-center gap-20 max-sm:gap-8 max-sm:flex-col-reverse">
              <div className="bg-image bg-cover bg-no-repeat aboutbg sm:w-1/4 max-sm:w-full lg:block max-sm:block rounded-3xl h-[400px] hidden">
              </div>
              <div className="lg:w-1/2 md:w-3/4 max-sm:w-full flex flex-col justify-center gap-7">
                <div className="w-full flex flex-row justify-center gap-10 lg:mt-16 max-[530px]:flex-col items-center max-sm:gap-4 sm:mt-8 max-sm:mt-8">
                  <SkillTab 
                    label="Experience"
                    iconURL={epimg}
                    description1="2+ years"
                    description2="Software Development"
                  />
                  <SkillTab 
                    label="Education"
                    iconURL={edimg}
                    description1="BSc [In View]"
                    description2="Computer Science"
                  />
                </div>
                <p className=" leading-5 text-gray-700 max-sm:px-2">
                  As a versatile software developer, I excel in developing robust, scalable applications across the full stack. With expertise in React, Node.js, and a broad range of other technologies, I deliver solutions that drive business success. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
