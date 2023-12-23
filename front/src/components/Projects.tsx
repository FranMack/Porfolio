import React from "react";

interface ProjectsProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
}


function Projects({referencia}:ProjectsProps){

    return(<section ref={referencia} className="w-full h-[100vh] bg-blue-800 pt-[12vh] ">
<h3 className="text-[2rem] font-semibold">Mis proyectos</h3>
   
  </section>)
}

export default Projects