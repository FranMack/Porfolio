import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialMedia {
  link: string;
  icon: JSX.Element
}

const linkedinIcon = <FaLinkedinIn style={{ height: "50%", width: "50%" }} />;
const githubIcon = <FaGithub style={{ height: "60%", width: "60%" }} />;
const mailIcon = <AiOutlineMail style={{ height: "50%", width: "50%" }} />;
const phoneIcon = <BsTelephoneFill style={{ height: "40%", width: "40%" }} />;

export const SocialMedia: SocialMedia[] = [
  {
    link: "https://www.linkedin.com/in/francisco-mackinnon-developer/",
    icon: linkedinIcon,
  },
  {
    link: "https://github.com/FranMack",
    icon: githubIcon,
  },
  {
    link: "mailto:franmack556@gmail.com",
    icon: mailIcon,
  },
  {
    link: "https://www.linkedin.com/in/francisco-mackinnon-developer/",
    icon: phoneIcon,
  },
];
