// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/data-analysis-svgrepo-com.svg";
import xray from "./images/xray.png";
import nbdev from "./images/nbdev.png";
import nosql from "./images/nosql.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/new_orleans.jpg";
import HeroDark from "./images/los_angeles.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "GenaroRocha";

// Navbar Logo image
export const navLogo = Logo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I'm a third year Data Science student at ITAM. From San Luis Potosí, MX. Baseball player. Houston Astros fan. I lived the first 17 years of my life in Veracruz. I'm very close to my family. Before studying Data Science, I was studying physics at UNAM, but I decided to change my path. Aiming to make a positive impact on our future.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 2,
    skill: <Icon icon="ion:stats-chart" className="display-4" />,
    name: "Statistics",
  },
  {
    id: 3,
    skill: <Icon icon="tabler:brand-python" className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <Icon icon="eos-icons:neural-network" className="display-4" />,
    name: "Neural networks",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:database" className="display-4" />,
    name: "SQL",
  },
  {
    id: 6,
    skill: <Icon icon="logos:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 7,
    skill: <Icon icon="bxl:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["DenseNet_pediatric_neumony", "nbdev_pilot_ds_project", "ProyectoNoSQL"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "DenseNet_pediatric_neumony",
    image: xray,
  },
  {
    name: "nbdev_pilot_ds_project",
    image: nbdev,
  },
  {
    name: "ProyectoNoSQL",
    image: nosql,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
