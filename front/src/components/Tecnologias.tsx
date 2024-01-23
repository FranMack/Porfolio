import { tecnologias } from "../assets/logos/logos";

interface TecnoProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
}

function Tecnologias({ referencia }: TecnoProps) {
  return (
    <section ref={referencia} className="tecnoSection w-full h-auto pt-[12vh] ">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">TECNOLOGÍAS</h2>
      <div
        className={` w-[70%] grid  mt-[5%] gap-y-6 items-center justify-items-center mx-auto duration-1000 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xs:w-[90%] sm:[80%] lg:w-[70%]`}
      >
        {tecnologias.map((tec) => {
          return (
            <div
              className={`tecnoCard efectoRevealOut w-[80%] aspect-[2.2/1] text-secundaryColor  flex justify-center items-center rounded-xl shadow-sm shadow-primaryColor  duration-1000 hover:shadow-lg hover:shadow-primaryColor`}
            >
              {tec.svg}
              <p className="text-[1.3rem] font-semibold ">{tec.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tecnologias;
