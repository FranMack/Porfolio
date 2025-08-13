import { JSX } from "react";
import { AiOutlineMail } from "react-icons/ai";
//import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialMedia {
  id:number;
  link: string;
  icon: JSX.Element;
}

const linkedinIcon = (
  <FaLinkedinIn title="Linkedin" style={{ height: "50%", width: "50%" }} />
);
const githubIcon = (
  <FaGithub title="Github" style={{ height: "60%", width: "60%" }} />
);
const mailIcon = (
  <AiOutlineMail title="Email" style={{ height: "50%", width: "50%" }} />
);
//const phoneIcon = <BsTelephoneFill title="Whats up" style={{ height: "40%", width: "40%" }} />;

export const SocialMedia: SocialMedia[] = [
  {
    id:1,
    link: "https://www.linkedin.com/in/francisco-mackinnon-developer/",
    icon: linkedinIcon,
  },
  {
    id:2,
    link: "https://github.com/FranMack",
    icon: githubIcon,
  },
  {
    id:3,
    link: "mailto:franmack556@gmail.com",
    icon: mailIcon,
  },
];
