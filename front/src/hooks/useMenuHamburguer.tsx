import { useEffect } from "react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

function useMenuHamburguer(){

    const { menuOpen, togleMenu } = useContext(ModalContext);

    const menuHamburguesa = document.querySelector("#menuHamburguesa");
    const handlerMenuOpen = (): void => {
      togleMenu();
    };
  
    useEffect(() => {
      function trigger() {
        if (menuOpen) {
          menuHamburguesa?.classList.remove("menuHamburAnimationInit");
          menuHamburguesa?.classList.remove("menuHamburAnimationOut");
          menuHamburguesa?.classList.add("menuHamburAnimation");
        } else {
          menuHamburguesa?.classList.add("menuHamburAnimationOut");
          menuHamburguesa?.classList.remove("menuHamburAnimation");
        }
      }
      trigger();
    }, [menuOpen]);

    return {handlerMenuOpen,menuOpen}
}

export {useMenuHamburguer}