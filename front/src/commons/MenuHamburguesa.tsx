import { FaTimes } from "react-icons/fa";


interface MenuHamburProps {
  itemsNavbar: {
    name: string;
    scroll: React.MutableRefObject<HTMLDivElement | never[]>;
  }[];
  scrollHandler: (
    elemRef: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
  handlerMenuOpen: () => void;
}

function MenuHamburguesa({ itemsNavbar, scrollHandler,handlerMenuOpen }: MenuHamburProps) {
  return (
    <aside id="menuHamburguesa" className="menuHamburAnimationInit  w-[50vw] h-[100vh] fixed z-50 flex flex-col justify-between right-0 bg-[#121212] transform">
      <div className="w-full flex justify-start mt-[2%]  ">
        <FaTimes onClick={handlerMenuOpen} style={{ marginLeft: "1%", fontSize: "1.5rem" }} />
      </div>
      <h2 className="text-[10vh] text-center my-[2%]">FJM</h2>
      <ul className="flex flex-col justify-evenly items-center w-[80%] h-[50%] mx-auto mb-[10%] border-solid border-t-2 ">
        {itemsNavbar.map((item, i) => (
          <li
            key={i}
            onClick={() =>{ scrollHandler(item.scroll);handlerMenuOpen()}}
            className=" hover:text-yellow-500 text-[3vh]"
          >
            {item.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MenuHamburguesa;
