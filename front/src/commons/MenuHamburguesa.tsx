import { BsXLg } from "react-icons/bs";
import { Section,Item } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { SpainFlag } from "../assets/logos/vectoresIconos";
import { UKflag } from "../assets/logos/vectoresIconos";


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

  const { chosenLanguage, togleLanguage } = useContext(LanguageContext);
  return (
    <aside
      id="menuHamburguesa"
      className="menuHamburAnimationInit  w-[60vw] h-[100vh] fixed z-50 flex flex-col justify-start right-0 bg-bgColor transform"
    >
      <div className="w-full flex justify-start mt-[2%]  ">
        <BsXLg
          onClick={handlerMenuOpen}
          style={{ marginLeft: "1%",marginTop:"1%", fontSize: "1.3rem" }}
        />
      </div>
      <h2 className="text-[7vh] text-center my-[20%]">FJM</h2>
      <ul className="flex flex-col justify-evenly items-center w-[80%] h-[55%] mx-auto mb-[10%] border-solid border-t-2 ">
        {itemsNavbar.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              scrollHandler(item.scroll);
              handlerMenuOpen();
            }}
            className=" hover:text-primaryColor text-[3vh]"
          >
            {chosenLanguage==="english" ? item.name.toUpperCase():item.nombre.toUpperCase()}
          </li>
        ))}
        <li className="flex h-[15%] aspect-[2/1] justify-between items-center">
            <div
            title="Español"
              onClick={togleLanguage}
              className={`${
                chosenLanguage !== "english" ? "opacity-100":"opacity-40"
              } h-[35%] aspect-[2/1] `}
            >
              <SpainFlag />
            </div>
            <div
            title="English"
              onClick={togleLanguage}
              className={`${chosenLanguage === "english" ? "opacity-100":"opacity-40"} h-[35%] aspect-[2/1]`}
            >
              <UKflag />
            </div>
          </li>
      </ul>
    </aside>
  );
}

export default MenuHamburguesa;
