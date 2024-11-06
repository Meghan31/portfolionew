import React from "react";
import { useRive } from "@rive-app/react-canvas";
import "../rive-details.scss";

export default function Resume() {
  const { RiveComponent } = useRive(
    {
      src: "public/assets/rive/newbuttonrive.riv",
      stateMachines: "DownloadButton",

      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div
      className="rive-resume"
      onClick={() => {
        const link = document.createElement("a");
        link.href = "public/assets/Meghasrivardhan-Resume.pdf";
        link.download = "Meghasrivardhan_CV.pdf";
        link.click();
      }}
    >
      <RiveComponent />
    </div>
  );
}
