import { useYoutubeSize } from "../hooks/useYoutubeSize";
import { FaTimes } from "react-icons/fa";
import YouTube from "react-youtube";

interface ModalDemoProps {
  handleModalVideo: () => void;
  modalVideo: boolean;
  videoId: string;
}

function ModalDemo({ handleModalVideo, modalVideo, videoId }: ModalDemoProps) {
  const { opts } = useYoutubeSize();

  return (
    <>
      <div
        id="ventana"
        className=" xs:w-[90%] lg:w-[60%] aspect-[2/1] flex items-center flex-col bg-bgColor mx-auto px-[1%] pb-[1%]"
      >
        <div className="w-full flex justify-end  ">
          <FaTimes
            onClick={handleModalVideo}
            style={{ fontSize: "1.5rem", fontWeight: "lighter" }}
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
