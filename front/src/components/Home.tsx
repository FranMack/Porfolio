import React, { useState } from "react";

interface HomeProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
}

function Home({ referencia }: HomeProps) {
  return (
    <section
      ref={referencia}
      className="w-full h-[100vh] mx-auto flex justify-center items-center pt-[12vh]"
    >
      <div className="w-1/2 h-[70%] flex flex-col justify-center items-center colum">
        <h1 className="text-[4rem] font-semibold">
          Hola, soy Francisco <br />
          <span className="textMotion"> Full-Stack Developer</span>
        </h1>
        <h2 className="text-[3rem] font-semibold">Bienvenidos a mi porfolio</h2>
      </div>
    </section>
  );
}

export default Home;
