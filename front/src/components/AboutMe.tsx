import React from "react";
import fotoCV from "../assets/fotoCV.jpeg"

interface AboutMeProps{
  referencia: React.MutableRefObject<HTMLDivElement | null >; 
  aboutMeMotion:boolean}

function AboutMe({referencia,aboutMeMotion}:AboutMeProps) {
  return (
    <section ref={referencia} className={`${aboutMeMotion ?"opacity-100 scale-100":"opacity-0 scale-0"} duration-1000 w-full h-[100vh] pt-[12vh]`}>
      <h2 className="ml-[5%] text-[1.5rem] font-medium">SOBRE MI</h2>
      <div className="w-full h-[100%]  mx-auto flex justify-center items-center">
      <div className=" w-1/2 h-[100%] flex flex-col items-center justify-center">
        <h3 className="text-[2.5rem] font-semibold mb-[5%]">Quien soy?</h3>
        <p className="text-[1.4rem] mx-[5%]">
          Soy un desarrollador full stack con sólidas aptitudes para la
          resolución de problemas, trabajo en equipo, planificación y
          cumplimiento de objetivos, producto de mis años de experiencia como
          ingeniero civil en la industria de la construcción. 
          <br/>
          <br/>
          Mi camino de
          programador comienza de manera autodidacta, para luego, con el fin de
          acelerar mi curva de aprendizaje iniciar un coding bootcamp enfocado
          en el stack de tecnologías PEARN. Hoy me encuentro en el desafío de
          iniciar mi carrera en la industria tecnológica, donde aspiro a formar
          parte de un equipo de trabajo en donde pueda contribuir y
          desarrollarme profesionalmente.
        </p>
        <h3 className="bg-blue-400 mt-[5%] p-[2%] rounded">DOWNLOAD MY CV</h3>
      </div>
      <div className="w-1/2 h-[100%] flex justify-center items-center">
        <div className="h-1/2 aspect-square rounded-full overflow-hidden">
            <img className= {`${aboutMeMotion ? "rotate-0":"rotate-90"} h-full w-full object-cover duration-1000`} src={fotoCV} alt="" />

        </div>

      </div>
      </div>
    </section>
  );
}

export default AboutMe;
