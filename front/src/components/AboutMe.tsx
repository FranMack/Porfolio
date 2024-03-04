import React from "react";
import aboutMePicture from"../assets/profilePicture.jpg"
import cvSpanish from "../assets/cv/Francisco Mackinnon CV.pdf"
import cvEnglish from "../assets/cv/Francisco Mackinnon Resume.pdf"
import {FaDownload } from "react-icons/fa";
import { Section } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { infoAboutMe } from "../assets/proyectos/Info";
interface AboutMeProps{
  referencia: React.MutableRefObject<Section | never[] |any>;
 
}

function AboutMe({referencia}:AboutMeProps) {
  const{chosenLanguage}=useContext(LanguageContext)
  return (
    <section ref={referencia} className={`sectionAboutMe w-full  h-auto pt-[12vh] overflow-hidden `}>
      <h2 className="ml-[5%] text-[1.5rem] font-medium">{`${chosenLanguage==="english" ? "ABOUT ME":"SOBRE MI"}`}</h2>
      <div className="w-full h-auto  mx-auto flex justify-center items-center xs:flex-col lg:flex-row mt-[2%] lg:items-center ">
      <div className={ `h-[100%] mx-[5%] flex flex-col items-center justify-center sm:w-[85%] lg:w-[50%]`}>
        <p  className="efectoRevealOut parrafo xs:text-[1.1rem] lg:text-[1.2rem]  mb-[2%] text-center">
        {`${chosenLanguage==="english" ? infoAboutMe.p1English :infoAboutMe.p1Spanish}`}
          </p>
          <p  className="efectoRevealOut parrafo xs:text-[1.1rem] lg:text-[1.2rem]  mb-[2%] text-center">
          {`${chosenLanguage==="english" ? infoAboutMe.p2English :infoAboutMe.p2Spanish}`}
          </p> 
          <p className="efectoRevealOut parrafo xs:text-[1.1rem] lg:text-[1.2rem]  mb-[2%] text-center">
          {`${chosenLanguage==="english" ? infoAboutMe.p3English :infoAboutMe.p3Spanish}`}
        </p>
        <div className="botonCV h-fit w-full flex justify-evenly efectoRevealOut my-[1%]">
        <a href={cvSpanish} download="CV Francisco Mackinnon" className="  text-[1.1rem]  text-primaryColor border-primaryColor border-[2px]  font-semibold  p-[2%] rounded-lg flex justify-evenly  xs:w-[40%] sm:w-[30%] lg:w-[30%] xs:mb-[10%] lg:mb-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor ">
          <FaDownload/> <p className="ml-[5%] ">{`CV (esp)`}</p></a>
          <a href={cvEnglish} download="Resume Francisco Mackinnon" className=" text-[1.1rem]  text-primaryColor border-primaryColor border-[2px]  font-semibold  p-[2%] rounded-lg flex justify-evenly  xs:w-[40%] sm:w-[30%] lg:w-[30%]  xs:mb-[10%] lg:mb-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor ">
          <FaDownload/> <p className="ml-[5%] ">{`CV (eng)`}</p></a>
        </div>
       
      </div>
      <div className="  sm:w-[85%] lg:w-[50%] h-ful">
        <picture className=" w-[100%] overflow-hidden flex justify-center items-center  ">
            <img className= {`imagenAboutMe efectoRevealOut w-[80%]  object-cover duration-1000 rounded-lg shadow-lg shadow-primaryColor mb-[2%] `} src={aboutMePicture} alt="" />

        </picture>

      </div>
      </div>
    </section>
  );
}

export default AboutMe;
