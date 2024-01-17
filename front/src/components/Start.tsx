import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import caricatura from"../assets/caricatura.jpg"
import { FaArrowCircleDown } from "react-icons/fa";
interface StartProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
  itemsNavbar: { name: string; scroll: React.MutableRefObject<HTMLDivElement | null> }[];
  scrollHandler: (elemRef: React.MutableRefObject<HTMLDivElement | null>) => void;
}

function Start({ referencia,itemsNavbar,scrollHandler }: StartProps) {
  const { menuOpen } = useContext(ModalContext);
  return (
    <section
      ref={referencia}
      className={`${menuOpen && "opacity-40 brightness-50 pointer-events-none bg-black"} startSection w-full min-h-[100vh] h-auto mx-auto flex flex-col items-center justify-center pt-[12vh] xs:justify-evenly `}
    >
      <div className="w-[100%]  h-auto flex  justify-center items-center xs:flex-col lg:flex-row">
      <div className="w-[50%]  flex justify-center items-center  flex-col ">
      <h1 className=" whitespace-nowrap lg:text-[6vh] sm:text-[5vh] xs:text-[4vh]">
          <span className="saludoReveal">Hola,</span> <span className="saludoReveal2"> soy Francisco</span>
          
        </h1>
        <h2 className="textMotion lg:text-[6vh] sm:text-[5vh] xs:text-[4vh]">{ `Full-Stack Developer </>`}</h2>
      </div>
      <div className="h-[80%] flex justify-center  items-center my-[2%] lg:my-0 lg:w-[25%] sm:w-[50%]  xs:w-[70%]  ">
        <div className=" caricaturaMotion  h-[100%] aspect-square rounded-full  overflow-hidden    ">
            <img className= {` h-full w-full object-cover duration-1000`} src={caricatura} alt="" />

        </div>

      </div>
      </div>
      <div className="saludoReveal3  flex flex-col items-center">
      <h2 className="lg:text-[5vh] sm:text-[4vh] xs:text-[4vh]    ">Bienvenidos a mi porfolio</h2>

      <button onClick={()=>scrollHandler(itemsNavbar[1].scroll)} className=" p-4 text-[6vh] rounded-full text-yellow-400   arrowDownAnimation">
    <FaArrowCircleDown/>
    </button>
    </div>
    </section>
  );
}

export default Start;
