import React from "react";
import { tecnologias } from "../assets/logos/logos";

interface TecnoProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
  tecnoMotion:boolean
}

function Tecnologias({referencia,tecnoMotion}:TecnoProps) {
  return (
    <section ref={referencia} className="w-full h-[100vh] pt-[12vh] ">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">TECNOLOGÍAS</h2>
      <div className={` w-[70%] grid grid-cols-4 mt-[5%] gap-y-6 items-center justify-items-center mx-auto duration-1000`}>
        {tecnologias.map((tec) => {
          return (
            <div className={`${tecnoMotion ? "tecnoReveal opacity-100":"opacity-0"} w-[80%] aspect-[2/1] text-[white]  flex justify-center items-center rounded-xl shadow-lg shadow-shodowGrey400 duration-1000 hover:scale-105`} >
              {tec.svg}
              <p className="text-[1.3rem] font-semibold ">{tec.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}



export default Tecnologias;
