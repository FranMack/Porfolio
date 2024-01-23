import { useEffect,useState } from "react";
interface Medidas {
    ancho: number;
    alto: number;
  }

function useYoutubeSize(){
    const [medidas, setMedidas] = useState<Medidas | null>(null);


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

    return {opts}

}

export {useYoutubeSize};