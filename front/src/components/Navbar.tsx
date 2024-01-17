import React from 'react';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

interface NavbarProps {
  itemsNavbar: { name: string; scroll: React.MutableRefObject<HTMLDivElement | null> }[];
  scrollHandler: (elemRef: React.MutableRefObject<HTMLDivElement | null>) => void;
  handlerMenuOpen: () => void;
}

function Navbar({ itemsNavbar, scrollHandler,handlerMenuOpen }: NavbarProps) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScreenWidth = ():void => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleScreenWidth);
  return (
    <>
   {screenWidth>1024 ? (<nav className="w-full h-[12vh] flex items-center justify-between fixed shadow-lg shadow-shodowGrey400 bg-[#121212] z-40">
      <h1 onClick={()=>scrollHandler(itemsNavbar[0].scroll)} className="ml-[2%] text-[2rem] hover:text-yellow-500">FJM</h1>
      <ul className="flex justify-around w-[40%]">
        {itemsNavbar.map((item, i) => (
          <li key={i}
            onClick={() => scrollHandler(item.scroll)}
            className="text-[1.1rem] group relative after:content-[''] after:absolute after:inset-y-6 after:inset-x-0 after:mx-auto after:w-0 after:h-1 after:bg-yellow-500 after:transition-all after:origin-left after:transform-gpu after:group-hover:w-full after:group-hover:duration-300 after:hover:content-[''] after:hover:w-full after:hover:font-bold hover:text-yellow-500"
          >
            {item.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>):(
      <nav className="w-full h-[12vh] flex items-center justify-between fixed shadow-lg shadow-shodowGrey400 bg-[#121212] z-40">
      <h3 onClick={()=>scrollHandler(itemsNavbar[0].scroll)} className="ml-[2%] text-[2rem] hover:text-yellow-500">FJM</h3>
      <FaBars onClick={handlerMenuOpen} style={{ fontSize: "1.5rem", marginRight: "2%" }}/>
    </nav>

    )}</>
  )
}

export default Navbar;