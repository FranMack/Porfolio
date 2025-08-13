"use client";
import { infoAboutMe } from "@/app/utils";
import { DowloadCv, Paragraph, ProfileImage } from "../components/AboutMe";
import {LanguageContext} from "@/context/LanguageContext";
import { useContext } from "react";


export const AboutMe = () => {
  const { chosenLanguage } = useContext(LanguageContext);
  const cvSpanish = "";
  const cvEnglish = "";
  return (
    <section
    id="aboutMe"
      className={`sectionAboutMe w-screen h-auto pt-[12vh] overflow-hidden text-secondary`}
    >
      <h2 className="ml-[5%] text-[1.5rem] font-medium">{`${
        chosenLanguage === "english" ? "ABOUT ME" : "SOBRE MI"
      }`}</h2>
      <div className=" w-full h-auto  mx-auto flex justify-center items-center flex-col lg:flex-row mt-[2%] lg:items-center ">
        <div
          className={`h-[100%] mx-[5%] flex flex-col items-center justify-center sm:w-[85%] lg:w-[50%] bg-gre`}
        >
          <Paragraph
            text={
              chosenLanguage === "english"
                ? infoAboutMe.p1English
                : infoAboutMe.p1Spanish
            }
          />
          <Paragraph
            text={
              chosenLanguage === "english"
                ? infoAboutMe.p2English
                : infoAboutMe.p2Spanish
            }
          />
          <Paragraph
            text={
              chosenLanguage === "english"
                ? infoAboutMe.p3English
                : infoAboutMe.p3Spanish
            }
          />
          <DowloadCv />
        </div>
        <ProfileImage />
      </div>
    </section>
  );
};
