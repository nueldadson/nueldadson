import { Fade } from "react-awesome-reveal";
import { Tabs } from "../components";


const Projects = () => {

    const tabItems = [
        {
        label: 'Software Development',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Front-end Development',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Front-end Development',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Front-end Development',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Front-end Development',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Tab Test',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Tab Test',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Tab Test',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Tab Test',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Tab Test',
        content: <p>Tab Content</p>,
        },
        {
        label: 'Tab Test',
        content: <p>Tab Content</p>,
        },
    ];


    return (
        <div className="h-fit flex justify-center items-center max-w-full p-6 bg-white">
            <Fade direction="in" duration={1500} className="w-full h-full flex justify-center items-center" >
		        <div className="rounded-[40px] max-sm:rounded-[25px] text-center bg-[white] w-full h-[inherit] shadow-2xl flex p-6 max-[370px]:p-2 overflow-hidden">
                    <div className="flex flex-col w-full h-fit py-14 justify-center gap-8">
                        <div className=" flex flex-col">
                            <span className="text-lg mb-3">
                                Explore My
                            </span>
                            <h1 className="text-4xl mt-[-10px] font-bold normal-case">
                                Projects
                            </h1>
                        </div>
                        <Tabs tabItems={tabItems} />                    
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;
