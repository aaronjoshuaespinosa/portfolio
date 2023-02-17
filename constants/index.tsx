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