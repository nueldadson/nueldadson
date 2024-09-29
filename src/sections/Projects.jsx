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
        description: 'Gamedey is the Artino for sports facilities and Tinder for sports enthusiasts. We are a premier platform for sports enthusiasts and athletes to discover, book, and share unique sports facilities',
      },
      {
        img: pinit,
        Link: 'https://pinitlandingpage.netlify.app',
        githubLink: 'https://github.com/nueldadson/pinit.landingpage',
        heading: 'PinIt Landing Page',
        description: "Pinit is a mobile application  designed to address the challenges of lost item management and child safety in Nigeria. It offers a comprehensive solution for individuals and parents concerned about lost items, including children, by providing a versatile pinning system that allows users to securely track and manage various belongings. Pinit aims to offer peace of mind, facilitate the efficient return of lost items, and provide a sense of security through pin allocation and database management, enabling users to pin anything from valuable personal items to important documents and more.", 
      },
      {
        img: pedawall,
        Link: 'https://pedawalldemo.vercel.app',
        githubLink: 'https://github.com/nueldadson/pedawalldemo',
        heading: 'Pedawalls Demo',
        description: 'Pedawall Demo Web App',
      },
      {
        img: natchies,
        Link: 'https://natchiesmerch.netlify.app',
        githubLink: 'https://github.com/nueldadson/natchiesmerch',
        heading: 'Natchies Merch Web App',
        description: "Welcome to Natchies Merch! At Natchies Merch, we blend the worlds of anime, tech, and personalized style to elevate your fashion game. Join our vibrant community and experience the fusion of creativity, technology, and fashion, as we take innovation to the next level with AI-powered designs. Embrace the future of fashion with us!" ,
      },
      {
        img: demonatchies,
        Link: 'https://demo-natchies-merch.vercel.app',
        githubLink: 'https://github.com/nueldadson/demo-natchies-merch',
        heading: 'Natchies Merch Shoe Store Demo',
        description:"Explore the latest in anime-inspired and tech-driven footwear at Natchies Merch’s Sole Division. Our unique blend of creativity and innovation brings you custom-designed shoes that fuse style with cutting-edge technology. Discover our demo collection today and step into a new era of personalized footwear that’s made to ignite your passion for fashion! ",
      },
      {
        img: cyberribs,
        Link: 'https://cyberribs.com.ng',
        githubLink: 'https://github.com/nueldadson/cyberribs',
        heading: 'CyberRibs Web App',
        description: 'Cyber Ribs is a pioneering tech company that specializes in transforming innovative project ideas into thriving startups. With our comprehensive range of services, we empower clients to bring their visions to life by providing end-to-end solutions that encompass Web/App development, deployment, and strategic marketing.',
      },
      {
        img: portfolio,
        Link: 'https://nueldadson.com.ng',
        githubLink: 'https://github.com/nueldadson/nueldadson',
        heading: 'Portfolio Template',
        description: 'Dynamic MERN Stack Portfolio Template. This portfolio template is built using the power of the MERN stack (MongoDB, Express, React, Node.js) to create a fully dynamic and customizable showcase. Designed for developers and creatives, the template features seamless content updates, real-time project displays, and a sleek, responsive design. It allows you to manage your portfolio effortlessly with a user-friendly interface and modern tech stack, ensuring your work is always front and center. Perfect for showcasing your skills, projects, and achievements in a dynamic, efficient, and visually stunning way!',
      },
      {
        img: aflw,
        Link: 'https://aflw-project.vercel.app',
        githubLink: 'https://github.com/nueldadson/aflwProject',
        heading: 'AFLW Landing Page',
        description: 'At Afroland warriors our mission is to create a very strong African presence on the metaverse through portfolio diversity and expansion while also committing to our corporate social responsibility of helping better the lives of African children living in poverty.',
      },
      {
        img: fitness,
        Link: 'https://bootstrap-fitness-website-jquery.vercel.app/',
        githubLink: 'https://github.com/nueldadson/Bootstrap_fitness_website_Jquery',
        heading: 'Fitness Arena Template',
        description: 'A sleek and responsive template tailored for gyms and fitness trainers. It features sections for workout plans, trainer profiles, class schedules, and client testimonials. Easy to customize, it provides a professional online presence that motivates users to achieve their fitness goals!',
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
        description: '',
      },
      {
        img: pinitui ,
        Link: 'https://pinitlandingpage.netlify.app',
        githubLink: 'https://www.figma.com/proto/Rwwp6Mbma2rsNaWjqkD16A/Pin-It-Landing-Page?node-id=1-2&node-type=canvas&t=hEb5qfVhBV4HLUFy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        heading: 'PinIt Landing Page UI',
        description: 'Pinit is a mobile application designed to address the challenges of lost item management and child safety in Nigeria. It offers a comprehensive solution for individuals and parents concerned about lost items, including children, by providing a versatile pinning system that allows users to securely track and manage various belongings. Pinit aims to offer peace of mind, facilitate the efficient return of lost items, and provide a sense of security through pin allocation and database management, enabling users to pin anything from valuable personal items to important documents and more.',
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
