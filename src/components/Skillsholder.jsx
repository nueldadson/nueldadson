import { cmimg } from "../assets/images";
import Skilllist from "./Skillslist";

const SkillTab = () => {
  return (
    <div className="flex flex-row w-fit h-fit gap-10 grid grid-cols-2">
      <div className="flex flex-col h-fit border-[1.5px] border-gray-500 rounded-[2rem] cursor-pointer items-center max-[400px]:items-start px-5 py-3 col-span-2">
        <h1 className="text-3xl font-bold normal-case text-gray-600">
          AI Development
        </h1>
        <div className="flex flex-row gap-12 max-sm:gap-8 max-[458px]:gap-4 gap-y-7 max-md:gap-y-4 max-sm:gap-y-3 mt-3 grid grid-cols-3 max-md:grid-cols-2 max-[432px]:scale-[93%] max-[400px]:grid-cols-1 max-[400px]:scale-100">
          <Skilllist iconURL={cmimg} skill='Python, R, C++' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='Machine Learning' level="Scikit-learn, XGBoost" />
          <Skilllist iconURL={cmimg} skill='Deep Learning' level="TensorFlow, PyTouch" />
          <Skilllist iconURL={cmimg} skill='Fata Handling' level="SQL, NumPy" />
          <Skilllist iconURL={cmimg} skill='NLP' level="BERT, GPT, NLTK" />
          <Skilllist iconURL={cmimg} skill='Computer Vision' level="FastAI" />
          <Skilllist iconURL={cmimg} skill='Big Data' level="MongoDB e.t.c" />
          <Skilllist iconURL={cmimg} skill='MLOps Tools' level="Docker, Kubernetes" />
          <Skilllist iconURL={cmimg} skill='Data Science' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='Cloud Platforms' level="Experienced" />
        </div>
      </div>
      <div className="flex flex-col h-fit border-[1.5px] border-gray-500 rounded-[2rem] cursor-pointer items-center max-[400px]:items-start px-5 py-3 max-[860px]:col-span-2">
        <h1 className="text-3xl font-bold normal-case text-gray-600 text-left max-[500px]:leading-9">
          Software Development
        </h1>
        <div className="flex flex-row gap-12 max-sm:gap-8 max-[458px]:gap-4 gap-y-7 max-md:gap-y-4 max-sm:gap-y-3 mt-3 grid grid-cols-2 max-[860px]:grid-cols-3 max-md:grid-cols-2 max-[432px]:scale-[93%] max-[400px]:grid-cols-1 max-[400px]:scale-100">
          <Skilllist iconURL={cmimg} skill='MERN' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='REACT-NATIVE' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='PHP' level="Laravel, CodeIgniter..." />
          <Skilllist iconURL={cmimg} skill='NEST' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='PYTHON' level="Django, Flask, FastAPI..." />
          <Skilllist iconURL={cmimg} skill='DATABASE' level="MySQL, FIrebase..." />
          <Skilllist iconURL={cmimg} skill='Cloud Dev' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='FLUTTER & DART' level="Intermediate" />
          <Skilllist iconURL={cmimg} skill='WORDPRESS/WIX' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='CSS' level="Tailwind, Bootstrap e.t.c" />
          <Skilllist iconURL={cmimg} skill='HTML' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='GIT & GITHUB' level="Experienced" />
        </div>
      </div>
      <div className="flex flex-col h-fit border-[1.5px] border-gray-500 rounded-[2rem] cursor-pointer items-center max-[400px]:items-start px-5 py-3 max-[860px]:col-span-2 ">
        <h1 className="text-3xl font-bold normal-case text-gray-600">
          Brand/UI-UX Design
        </h1>
        <div className="flex flex-row gap-12 max-sm:gap-8 max-[458px]:gap-4 gap-y-7 max-md:gap-y-4 max-sm:gap-y-3 mt-3 grid grid-cols-2 max-[860px]:grid-cols-3 max-md:grid-cols-2 max-[432px]:scale-[93%] max-[400px]:grid-cols-1 max-[400px]:scale-100">
          <Skilllist iconURL={cmimg} skill='FIGMA' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='PHOTOSHOP' level="Experienced" />
          <Skilllist iconURL={cmimg} skill='AFTER-EFFECT' level="Motion Graphics" />
          <Skilllist iconURL={cmimg} skill='POWERPOINT' level="Experienced" />
        </div>
      </div>
    </div>
  );
};

export default SkillTab;
