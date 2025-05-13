import {Project} from "../models/project";
import {FaReact} from "react-icons/fa";
import {FaAngular} from "react-icons/fa6";
import {SiSpringboot} from "react-icons/si";
import {VscAzure} from "react-icons/vsc";
import {RiTailwindCssFill} from "react-icons/ri";

export const PROJECTS: Project[] = [
    {
        id: "1",
        imageUrl: 'https://cdn.jsdelivr.net/gh/phinzin/image-storage@main/my-portfolio/projects/home-management.webp',
        title: "Home Management Web App",
        description: "projects.list.home_management.description",
        githubLink: "https://github.com/phinzin/my-home-web",
        techStack: [
            {icon: FaAngular, name: "Angular"},
            {icon: SiSpringboot, name: "Spring Boot"},
        ],
        features: [
            "projects.list.home_management.features.1",
            "projects.list.home_management.features.2",
            "projects.list.home_management.features.3",
            "projects.list.home_management.features.4",
        ]
    },
    {
        id: "2",
        imageUrl: 'https://cdn.jsdelivr.net/gh/phinzin/image-storage@main/my-portfolio/projects/porfolio.webp',
        title: "My Portfolio",
        description: "projects.list.portfolio.description",
        githubLink: "https://github.com/phinzin/my-portfolio",
        techStack: [
            {icon: FaReact, name: "React"},
            {icon: RiTailwindCssFill, name: "Tailwind CSS"},
            {icon: VscAzure, name: "Microsoft Azure"},
        ],
        features: [
            "projects.list.portfolio.features.1",
            "projects.list.portfolio.features.2",
            "projects.list.portfolio.features.3",
        ]
    }
];