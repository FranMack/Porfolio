import React from "react";
import fotoCV from "../assets/fotoCV.jpeg"

function AboutMe() {
  return (
    <section className="w-full h-[100vh] bg-blue-800 mx-auto flex justify-center items-center">
      <div className="bg-yellow-400 w-1/2 h-[100%] flex flex-col items-center justify-center">
        <h3 className="text-[2.5rem] font-semibold mb-[5%]">Sobre mi</h3>
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
      <div className="bg-yellow-200 w-1/2 h-[100%] flex justify-center items-center">
        <div className="h-1/2 square bg-red-400  overflow-hidden">
            <img className=" h-full w-full object-fill" src={fotoCV} alt="" />

        </div>

      </div>
     
    </section>
  );
}

export default AboutMe;
