import React from 'react';

interface NavbarProps {
  itemsNavbar: { name: string; scroll: React.MutableRefObject<HTMLDivElement | null> }[];
  scrollHandler: (elemRef: React.MutableRefObject<HTMLDivElement | null>) => void;
}

function Navbar({ itemsNavbar, scrollHandler, }: NavbarProps) {
  return (
    <nav className="w-full h-[12vh] flex items-center justify-between fixed shadow-lg shadow-shodowGrey400 bg-gradient-to-r from-[#080126] via-bluee-500 to-[#7a1347]">
      <h1 className="ml-[2%] text-[2rem]">FJM</h1>
      <ul className="flex justify-around w-[40%]">
        {itemsNavbar.map((item, i) => (
          <li
            onClick={() => scrollHandler(item.scroll)}
            className="hover:underline hover:font-semibold decoration-2 underline-offset-4"
            key={i}
          >
            {item.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;