import OkCircle from "../assets/logos/vectoresIconos";
function ModalMensaje() {
  return (
    <>
      <div className=" modalMensaje opacity-0 menuHamburAnimationOut aspect-[2/1] bg-primaryColor absolute  z-50  flex justify-evenly items-center flex-col text-black xs:w-[90%] lg:w-1/4 lg:left-[37.5vw] xs:left-[5vw] lg:top-[25%] xs:top-[50%] rounded-lg font-bold border-bgColor border-[5px]">
        <div className="h-[45%] aspect-square">
          <OkCircle />
        </div>
        <p className="text-[1.9rem]">MENSAJE ENVIADO!</p>
      </div>
    </>
  );
}

export default ModalMensaje;
