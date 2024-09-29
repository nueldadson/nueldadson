import { Fade } from "react-awesome-reveal";
import { Tabs } from "../components";


const Projects = () => {

    // const tabItems = [
    //     {
    //     label: 'Software Development',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Front-end Development',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Front-end Development',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Front-end Development',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Front-end Development',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Tab Test',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Tab Test',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Tab Test',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Tab Test',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Tab Test',
    //     content: <p>Tab Content</p>,
    //     },
    //     {
    //     label: 'Tab Test',
    //     content: <p>Tab Content</p>,
    //     },
    // ];

    const tabItems = [
  {
    label: 'Software Development',
    projects: [
      {
        iframeLink: 'https://natchiesmerch.netlify.app',
        heading: 'Project 1',
        description: 'Description of Software Development Project 1',
      },
      {
        iframeLink: 'https://cyberribs.com.ng',
        heading: 'Project 2',
        description: 'Description of Software Development Project 2',
      },
    ],
  },
  {
    label: 'Front-end Development',
    projects: [
      {
        iframeLink: 'https://example3.com',
        heading: 'Project 3',
        description: 'Description of Front-end Development Project 3',
      },
      {
        iframeLink: 'https://gamedey.co',
        heading: 'Project 4',
        description: 'Description of Front-end Development Project 4',
      },
    ],
  },
  // Additional categories...
];


    return (
        <div className="min-h-fi flex justify-center items-center max-w-full p-6 bg-white">
            <Fade direction="in" duration={1500} className="w-full flex justify-center items-center" >
		        <div className="rounded-[40px] max-sm:rounded-[25px] text-center bg-[white] w-full shadow-2xl flex p-6 max-[370px]:p-2 overflow-hidden">
                    <div className="flex flex-col w-full py-14 justify-center gap-8">
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
