import React from "react";

function Navbar(){

    const itemsNavbar:string[]=["Inicio","Sobre mi","Habilidades","Proyetos","Contacto"]


    return(
        <nav className="bg-red-600 w-full h-[10vh] flex items-center justify-between fixed">
            <h1 className="text-[2rem]">FJM</h1>
            <ul className="flex justify-around w-[40%] bg-yellow-300">
            {itemsNavbar.map((item,i)=>{
                return <li key={i} >
                    {item}
                </li>
            })}
            </ul>
            

        </nav>
    )
}

export default Navbar