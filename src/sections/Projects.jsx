import { Fade } from "react-awesome-reveal";
import { Tabs } from "../components";
import { gamedey, pinit, pedawall, natchies, demonatchies, cyberribs, portfolio, aflw, fitness, pinitui, cloudadore } from "../assets/images";


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
    label: 'Web Development',
    projects: [
      {
        img: gamedey,
        Link: 'https://gamedey.co',
        githubLink: 'https://github.com/nueldadson/gamedey-landing-page',
        heading: 'Gamedey Website',
        description: 'd',
      },
      {
        img: pinit,
        Link: 'https://pinitlandingpage.netlify.app',
        githubLink: 'https://github.com/nueldadson/pinit.landingpage',
        heading: 'PinIt Landing Page',
        description: 'ff',
      },
      {
        img: pedawall,
        Link: 'https://pedawalldemo.vercel.app',
        githubLink: 'https://github.com/nueldadson/pedawalldemo',
        heading: 'Pedawalls Demo',
        description: 'd',
      },
      {
        img: natchies,
        Link: 'https://natchiesmerch.netlify.app',
        githubLink: 'https://github.com/nueldadson/natchiesmerch',
        heading: 'Natchies Merch Web App',
        description: 'd',
      },
      {
        img: demonatchies,
        Link: 'https://demo-natchies-merch.vercel.app',
        githubLink: 'https://github.com/nueldadson/demo-natchies-merch',
        heading: 'Natchies Merch Shoe Store Demo',
        description: 'd',
      },
      {
        img: cyberribs,
        Link: 'https://cyberribs.com.ng',
        githubLink: 'https://github.com/nueldadson/cyberribs',
        heading: 'CyberRibs Web App',
        description: 's',
      },
      {
        img: portfolio,
        Link: 'https://nueldadson.com.ng',
        githubLink: 'https://github.com/nueldadson/nueldadson',
        heading: 'Portfolio Template',
        description: 's',
      },
      {
        img: aflw,
        Link: 'https://aflw-project.vercel.app',
        githubLink: 'https://github.com/nueldadson/aflwProject',
        heading: 'AFLW Landing Page',
        description: 's',
      },
      {
        img: fitness,
        Link: 'https://bootstrap-fitness-website-jquery.vercel.app/',
        githubLink: 'https://github.com/nueldadson/Bootstrap_fitness_website_Jquery',
        heading: 'Fitness Arena Template',
        description: 's',
      },
    ],
  },
  {
    label: 'UI-UX',
    projects: [
      {
        img: cloudadore ,
        Link: '/',
        githubLink: 'https://www.figma.com/proto/PGbcbLekQfyuJe9YiwhjFk/Cloudadore-Swag-Store-ui?node-id=417-615&node-type=canvas&t=zzU3JxJ7B2r3OvXX-0&scaling=scale-down&content-scaling=fixed&page-id=417%3A615',
        heading: 'Cloudadore Community Swag Store UI',
        description: 'Description of Front-end Development Project 3',
      },
      {
        img: pinitui ,
        Link: 'https://pinitlandingpage.netlify.app',
        githubLink: 'https://www.figma.com/proto/Rwwp6Mbma2rsNaWjqkD16A/Pin-It-Landing-Page?node-id=1-2&node-type=canvas&t=hEb5qfVhBV4HLUFy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        heading: 'PinIt Landing Page UI',
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
