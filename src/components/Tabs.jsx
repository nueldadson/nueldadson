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

// const Tabs = ({ tabItems }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const handleTabClick = (index) => {
//     setDirection(index > activeTab ? 1 : -1); // Set direction: 1 = right, -1 = left
//     setActiveTab(index);
//   };

//   return (
//     <div className="w-[100%] relative min-h-fit">
//       <div className=" flex gap-2 overflow-x-scroll scrollbar-thin">
//         {tabItems.map((item, index) => (
//           <button
//             key={index}
//             className={`flex flex-row min-w-fit border-[1.5px] border-gray-500  rounded-full px-3 py-3 bg-[whitesmoke] cursor-pointer ${activeTab === index ? 'font-bold' : ''}`}
//             onClick={() => handleTabClick(index)}
//           >
//             <h1 className='text-lg  max-md:text-base max-sm:text-sm'>
//                 {item.label}
//             </h1>
//           </button>
//         ))}
//       </div>
//       <div className="relative min-h-fit mt-[20px] bg-green-300 flex">
//         <AnimatePresence initial={false} custom={direction}>
//           {tabItems.map((item, index) =>
//             activeTab === index ? (
//               <TabItem key={index} direction={direction}>
//                 {item.content}
//                 <div className='w-[100%] h-fit flex flex-row bg-red-100'>
//                   <div className='w-[300px] h-[300px]  bg-blue-300'> this place should be like an iframe holding the links from an array</div>
//                   <div className='w-full h-[300px] bg-orange-400'>
//                     <h1>this place would be the heading of the content by the side</h1>
//                     <p>this place would be the explanation of the project</p>
//                   </div>
//                 </div>
//               </TabItem>
//             ) : null
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

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

      <div className="relative min-h-fit mt-[20px] bg-green-300 flex">
        <AnimatePresence initial={false} custom={direction}>
          {tabItems.map((item, index) =>
            activeTab === index ? (
              <TabItem key={index} direction={direction}>
                {item.projects.map((project, idx) => (
                  <div key={idx} className="w-[100%] h-fit flex flex-row bg-red-100">
                    <div className="w-[300px] h-[300px] bg-blue-300">
                      <iframe
                        src={project.iframeLink}
                        title={project.heading}
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="w-full h-[300px] bg-orange-400 p-4">
                      <h1>{project.heading}</h1>
                      <p>{project.description}</p>
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
