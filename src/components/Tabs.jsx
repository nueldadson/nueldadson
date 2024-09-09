import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './tabs.css';

const TabItem = ({ children, direction }) => {
  // Motion variants for sliding animation
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
      className="w-full absolute"
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
    setDirection(index > activeTab ? 1 : -1); // Set direction: 1 = right, -1 = left
    setActiveTab(index);
  };

  return (
    <div className="w-[100%]">
      <div className=" flex gap-2 overflow-x-scroll scrollbar-thin">
        {tabItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-row min-w-fit border-[1.5px] border-gray-500  rounded-full px-3 py-3 bg-[whitesmoke] cursor-pointer ${activeTab === index ? 'font-bold' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <h1 className='text-lg  max-md:text-base max-sm:text-sm'>
                {item.label}
            </h1>
          </button>
        ))}
      </div>
      <div className="relative min-h-[100px] mt-[20px] bg-green-300 flex">
        <AnimatePresence initial={false} custom={direction}>
          {tabItems.map((item, index) =>
            activeTab === index ? (
              <TabItem key={index} direction={direction}>
                {item.content}
              </TabItem>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
