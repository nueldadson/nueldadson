import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './tabs.css';
import { FiGithub } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';

const TabItem = ({ children, direction }) => {
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <motion.div
      className="w-full h-fit"
      key={children.key}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

const Tabs = ({ tabItems }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleTabClick = (index) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  return (
    <div className="w-[100%] relative min-h-fit">
      <div className="flex gap-2 overflow-x-scroll scrollbar-thin">
        {tabItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-row min-w-fit border-[1.5px] border-gray-500  rounded-full px-3 py-3 bg-[whitesmoke] cursor-pointer ${activeTab === index ? 'font-bold' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <h1 className='text-lg max-md:text-base max-sm:text-sm'>{item.label}</h1>
          </button>
        ))}
      </div>

      <div className="relative min-h-fit mt-[20px] flex">
        <AnimatePresence initial={false} custom={direction}>
          {tabItems.map((item, index) =>
            activeTab === index ? (
              <TabItem key={index} direction={direction}>
                {item.projects.map((project, idx) => (
                  <div key={idx} className="w-[100%] h-fit flex flex-row max-[910px]:flex-col py-6">
                    <div className="bg-red-500 w-[40%] h-[300px] shadow-md shadow-gray-700 max-[910px]:h-[400px] max-[530px]:h-[300px] max-[450px]:h-[220px] p-4 rounded-3xl max-[910px]:w-full relative group"
                        style={{ backgroundImage: `url(${project.img})`, backgroundPosition: 'top center', backgroundSize: 'cover' }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col items-center gap-4">
                          <a href={project.Link}
                             target='_blank'
                             className="bg-white flex-row items-center justify-center gap-2 flex text-black py-2 px-4 rounded-full hover:bg-gray-300 border-2 border-white hover:bg-opacity-20 font-bold hover:text-white transition-all">
                            <FaGlobe/>
                            Visit Website
                          </a>
                          <a href={project.githubLink}
                             target='_blank'
                             className="bg-white flex-row items-center justify-center gap-2 flex text-black py-2 px-4 rounded-full hover:bg-gray-300 border-2 border-white hover:bg-opacity-20 font-bold hover:text-white transition-all">
                            <FiGithub/>
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="w-[60%] max-[910px]:w-full h-fit min-h-[300px] max-[910px]:min-h-fit flex items-start flex-col text-left px-4 py-6">
                      <h1 className='font-extrabold normal-case text-xl hover:tracking-wider hover:text-blue-950'>
                        <a href={project.Link}>
                          {project.heading}
                        </a>
                      </h1>
                      <p className='font-semibold text-gray-600'>
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </TabItem>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


export default Tabs;
