import { BsXLg } from "react-icons/bs";
import { Section,Item } from "../App";

interface MenuHamburProps {
  itemsNavbar: Item[] |[];
  scrollHandler: (
    elemRef: React.MutableRefObject<Section | any>
  ) => void;
  handlerMenuOpen: () => void;
}

function MenuHamburguesa({
  itemsNavbar,
  scrollHandler,
  handlerMenuOpen,
}: MenuHamburProps) {
  return (
    <aside
      id="menuHamburguesa"
      className="menuHamburAnimationInit  w-[50vw] h-[100vh] fixed z-50 flex flex-col justify-between right-0 bg-bgColor transform"
    >
      <div className="w-full flex justify-start mt-[2%]  ">
        <BsXLg
          onClick={handlerMenuOpen}
          style={{ marginLeft: "1%",marginTop:"1%", fontSize: "1.3rem" }}
        />
      </div>
      <h2 className="text-[10vh] text-center my-[2%]">FJM</h2>
      <ul className="flex flex-col justify-evenly items-center w-[80%] h-[50%] mx-auto mb-[10%] border-solid border-t-2 ">
        {itemsNavbar.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              scrollHandler(item.scroll);
              handlerMenuOpen();
            }}
            className=" hover:text-primaryColor text-[3vh]"
          >
            {item.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MenuHamburguesa;
