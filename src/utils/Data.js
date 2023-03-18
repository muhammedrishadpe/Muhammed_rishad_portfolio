import {FaReact,FaFlutter, FaNode, FaCss3Alt} from 'react-icons/fa';
import {SiJavascript, SiFlutter} from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

export const Skills = [
    {
        id:0,
        tech: 'React Js',
        icon: <FaReact />
    },
    {
        id:1,
        tech: 'Flutter',
        icon: <SiFlutter />
    },
    {
        id:2,
        tech: 'Node Js',
        icon: <FaNode />
    },
    
    {
        id:3,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
    // {
    //     id:4,
    //     tech: 'CSS',
    //     icon: <FaCss3Alt />
    // },
];

export const projectDetails = [
    {
        id:0,
        project_name: "Avec Shop App",
        project_desc: "The Avec Shop App boasts a comprehensive product catalog with detailed descriptions and images, allowing users to easily browse and select items of interest. With a streamlined checkout process and secure payment options, this app delivers a hassle-free and enjoyable shopping experience that is tailored to the needs and preferences of each user.",
        tech_stack: ['Flutter','Dart'],
        project_img: Project1,
        project_url:'https://github.com/muhammedrishadpe/Avec_Shop',
        reverse: false,
    },
    {
        id:1,
        project_name: "Chobani",
        project_desc: "I developed the Chobani website using HTML, CSS, and JavaScript, with a focus on delivering a rich and engaging desktop experience. The sleek and modern design features interactive elements that captivate users, creating an immersive experience. As lead developer, I ensured the website was optimized for performance and offered a seamless user experience. The Chobani website showcases my ability to develop impressive and engaging web projects that meet the needs of clients and users.",
        tech_stack: ['HTML','CSS','Javascript'],
        project_img: Project2,
        project_url:'https://muhammedrishadpe.github.io/Chobani/',
        reverse: false,
    }
]

export const navLink = [
    {
        id:0,
        name: 'Home',
        href: 'Home'
    },
    {
        id:1,
        name: 'My skills',
        href: 'Skills'
    },
    {
        id:2,
        name: 'Projects',
        href: 'My Projects'
    },
    {
        id:3,
        name: 'My Contact',
        href: 'Contact'
    }
]