import React from "react";
import fotoCV from "../assets/fotoCV.jpeg"
import cvSpanish from "../assets/cv/Francisco Mackinnon CV.pdf"
import {FaDownload } from "react-icons/fa";
import { Section } from "../App";

interface AboutMeProps{
  referencia: React.MutableRefObject<Section | never[] |any>;
 
}

function AboutMe({referencia}:AboutMeProps) {
  return (
    <section ref={referencia} className={`sectionAboutMe w-full  h-auto pt-[12vh] overflow-hidden `}>
      <h2 className="ml-[5%] text-[1.5rem] font-medium">SOBRE MI</h2>
      <div className="w-full h-auto  mx-auto flex justify-center items-center xs:flex-col lg:flex-row mt-[2%] lg:items-start">
      <div className={ `h-[100%] mx-[5%] flex flex-col items-center justify-center sm:w-[85%] lg:w-[50%]`}>
        <p  className="efectoRevealOut parrafo xs:text-[1.1rem] lg:text-[1.2rem]  mb-[2%]">
          Soy un desarrollador full stack con sólidas aptitudes para la
          resolución de problemas, trabajo en equipo, planificación y
          cumplimiento de objetivos, producto de mis años de experiencia como
          ingeniero civil en la industria de la construcción. 
          </p>
          <p  className="efectoRevealOut parrafo xs:text-[1.1rem] lg:text-[1.2rem]  mb-[2%]">
          Mi camino de
          programador comienza de manera autodidacta, para luego, con el fin de
          acelerar mi curva de aprendizaje iniciar un coding bootcamp enfocado
          en el stack de tecnologías PEARN.
          </p> 
          <p className="efectoRevealOut parrafo xs:text-[1.1rem] lg:text-[1.2rem]  mb-[2%]">
          Hoy en día me encuentro en el desafío de iniciar mi carrera en la industria tecnológica, donde aspiro a formar
          parte de un equipo de trabajo en donde pueda contribuir y desarrollarme profesionalmente.
        </p>
        <a href={cvSpanish} download="CV Francisco Mackinnon" className="efectoRevealOut botonCV text-[1.1rem]   bg-primaryColor my-[2%] p-[2%] rounded-lg flex xs:w-[20%] lg:w-[15%] justify-around xs:mb-[10%] ">
          <FaDownload/> <p className="ml-[5%] ">CV</p></a>
      </div>
      <div className="  sm:w-[85%] lg:w-[50%] h-full">
        <picture className=" w-[100%] overflow-hidden flex justify-center items-center">
            <img className= {`imagenAboutMe efectoRevealOut w-[60%] aspect-square object-cover duration-1000`} src={fotoCV} alt="" />

        </picture>

      </div>
      </div>
    </section>
  );
}

export default AboutMe;
