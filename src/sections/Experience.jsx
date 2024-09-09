import { Fade } from "react-awesome-reveal";
// import { cmimg } from "../assets/images";
import './experience.css';
import { Skillsholder } from "../components";

const Experience = () => {

  return (
    <div id='ex' className="h-fit flex justify-center items-center w-[100%] p-6 max-sm:p-6 max-md:p-8 bg-white">
      <Fade direction="in" duration={1500} className="w-full h-full flex justify-center items-center" >
		<div className="rounded-[40px] max-sm:rounded-[25px] text-center bg-[white] w-full h-[inherit] shadow-2xl flex p-6 max-[370px]:p-2">
            <div className="flex flex-col w-full h-fit py-14 justify-center">
                <div className=" flex flex-col">
                    <span className="text-lg mb-3">
                        Explore My
                    </span>
                    <h1 className="text-4xl mt-[-10px] font-bold normal-case">
                        Experience
                    </h1>
                </div>
                <div className="flex w-full justify-center mt-5">
                     <Skillsholder/>
                </div>
            </div>
        </div>
      </Fade>
    </div>
  );
};

export default Experience;
