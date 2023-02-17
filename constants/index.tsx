import { TbBrandGithub, TbBrandBehance, TbBrandDribbble, TbBrandLinkedin, TbBrandInstagram, TbBrandFacebook, TbBrandNextjs, TbBrandReactNative, TbBrandTailwind, TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandSass, TbBrandGit, TbBrandFigma } from "react-icons/tb";

export const links = [
    {
        link: "#about",
        text: "About",
    },
    {
        link: "#projects",
        text: "Projects",
    },
    {
        link: "#",
        text: "Contact",
    },
]

export const icons = [
    {
        link: "https://github.com/eyrooonnn",
        icon: <TbBrandGithub />,
        title: "Github",
    },
    {
        link: "https://www.behance.net/aaronjoshuaespinosa",
        icon: <TbBrandBehance />,
        title: "Behance",
    },
    {
        link: "https://dribbble.com/aaronjoshuaespinosa",
        icon: <TbBrandDribbble />,
        title: "Dribbble",
    },
    {
        link: "https://www.linkedin.com/in/aaronjoshuaespinosa/",
        icon: <TbBrandLinkedin />,
        title: "Linkedin",
    },
    {
        link: "https://www.instagram.com/_eyrooonnn/",
        icon: <TbBrandInstagram />,
        title: "Instagram",
    },
    {
        link: "https://www.facebook.com/eyrooonnn/",
        icon: <TbBrandFacebook />,
        title: "Facebook",
    },
]

export const stacks = [
    {
        id: 0,
        title: "Current Dev Stack",
        icons: [
            {
                ico: <TbBrandNextjs />,
                title: "NextJS",
                hoverColor: "white",
            },
            {
                ico: <TbBrandReactNative />,
                title: "ReactJS",
                hoverColor: "#61DBFB",
            },
            {
                ico: <TbBrandTailwind />,
                title: "Tailwind CSS",
                hoverColor: "#0AB7D4",
            },
        ]
    },
    {
        id: 1,
        title: "Other Tools",
        icons: [
            {
                ico: <TbBrandHtml5 />,
                title: "HTML",
                hoverColor: "#F4632A",
            },
            {
                ico: <TbBrandCss3 />,
                title: "CSS",
                hoverColor: "#32A8DC",
            },
            {
                ico: <TbBrandJavascript />,
                title: "Javascript",
                hoverColor: "#F1BE24",
            },
            {
                ico: <TbBrandSass />,
                title: "Sass",
                hoverColor: "#CC6699",
            },
            {
                ico: <TbBrandGit />,
                title: "Git",
                hoverColor: "#F15032",
            },
            {
                ico: <TbBrandFigma />,
                title: "Figma",
                hoverColor: "#A358FF",
            },
        ]
    },
]

export const projects = [
    {
        label: "LATEST PROJECT",
        title: "WingMan",
        year: "2023",
        img: "",
        srcLink: "https://github.com/eyrooonnn/WingMan-App",
        liveLink: "https://wingman-web.vercel.app/",
        desc: "An Online Assistant Platform for CEIT Students at Cavite State University - Don Severino Delas Alas Campus. This is a preliminary thesis project for one of our courses. This website was created in collaboration with a member of my group. I created the majority of the website's frontend and made some backend changes.",
        tags: [
            "ReactJS",
            "Tailwind CSS",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
        ]
    },
    {
        label: "ONGOING PROJECT",
        title: "Project C",
        year: "2023",
        img: "",
        srcLink: "#",
        liveLink: "#",
        desc: "A social media-style website where you can build a deck and fill it with cards. Decks are similar to albums in that you can name and categorize anything on them. Cards are similar to posts in that they can contain images or text that the user wishes to post. This project will allow me to hone my frontend skills while also learning more about backend development.",
        tags: [
            "NextJS",
            "Tailwind CSS",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
        ]
    },
]