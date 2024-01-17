import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import YouTube from "react-youtube";

interface ModalDemoProps {
  handleModalVideo: () => void;
  modalVideo: boolean;
  videoId:string
}

interface Medidas {
  ancho: number;
  alto: number;
}

function ModalDemo({ handleModalVideo, modalVideo,videoId }: ModalDemoProps) {
  const [medidas, setMedidas] = useState<Medidas | null>(null);

  const body=document.querySelector("body")

 

  useEffect(() => {
    const ventana = document.querySelector("#ventana");

    if (ventana && ventana.clientHeight && ventana.clientWidth) {
      const medidas: Medidas = {
        ancho: ventana.clientWidth,
        alto: ventana.clientHeight,
      };

      setMedidas(medidas);
    }
  }, []);


  // Opciones del reproductor de YouTube
  const opts = {
    height: medidas?.alto,
    width: medidas?.ancho,
   
  };

  return (
    <>
      <div
        id="ventana"
        className=" w-[60%] aspect-[2/1] flex items-center flex-col bg-[rgba(0,0,16,0.28)] mx-auto px-[1%] pb-[1%]"
      >
        <div className="w-full flex justify-end  ">
          <FaTimes
            onClick={handleModalVideo}
            style={{fontSize: "1.5rem", fontWeight:"lighter"}}
          />
        </div>
        {modalVideo && (
          <div>
            <YouTube videoId={videoId} opts={opts} />
          </div>
        )}
      </div>
    </>
  );
}

export default ModalDemo;