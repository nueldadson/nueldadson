import React from 'react'
import { Fade } from "react-awesome-reveal";
import { emimg, liimg } from '../assets/images'

const Contact = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div id='contact' className="h-fit flex justify-center items-center w-[100%] p-6 max-sm:p-6 max-md:p-8 bg-white">
      <Fade direction="in" duration={1500} className="w-full h-full flex justify-center items-center" >
		<div className="rounded-[40px] max-sm:rounded-[25px] text-center bg-[white] w-full h-[inherit] shadow-2xl flex p-6 max-[370px]:p-2">
            <div className="flex flex-col w-full h-fit pt-14 justify-center">
                <div className=" flex flex-col">
                    <span className="text-lg mb-3">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl mt-[-10px] font-bold normal-case">
                        Contact Me
                    </h1>
                </div>
                <div className="flex w-full justify-center mt-14 mb-[72px]">
                    <div className="flex flex-row max-sm:flex-col h-fit w-fit border border-gray-500 p-[1.3rem] max-sm:px-[1.5rem] max-sm:py-[1rem] rounded-3xl cursor-pointer gap-8 max-sm:gap-2 items-center">
                        <div className='flex flex-row justify-center items-center gap-1'>
                            <img src={emimg} alt="icon" className="w-[45px] h-[45px] "/>
                            <h1 className="text-xl normal-case max-w-[100%] max-sm:text-base">Cyberribs@gmail.com</h1>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-1'>
                            <img src={liimg} alt="icon" className="w-[37px] h-[37px] "/>
                            <h1 className="text-xl normal-case max-w-[100%] max-sm:text-base">Linkedin</h1>
                        </div>
                    </div>
                </div>
                <div className=''>
                    Copyright © {currentYear} Emmanuel Gideon-Dada. All Rights Reserved.
                </div>
            </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact;
