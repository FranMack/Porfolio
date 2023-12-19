import React from "react";

function Home(){
    return(
      <section className="w-full h-[100vh] bg-red-200 mx-auto flex justify-center items-center pt-[10vh]">
        <div className="bg-green-400 w-1/2 h-[70%] flex flex-col justify-center items-center colum">
        <h1 className="text-[4rem] font-semibold">
            Hola, soy Francisco <br/>
            Full-Stack Developer
        </h1>
        <h2 className="text-[3rem] font-semibold">Bienvenidos a mi porfolio</h2>
        </div>

      </section>)
}

export default Home;