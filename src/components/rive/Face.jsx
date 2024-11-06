import { useRive } from "@rive-app/react-canvas";
import "./rive-details.scss";

export default function Face() {
  const { RiveComponent } = useRive(
    {
      src: "public/assets/rive/newface.riv",
      stateMachines: "face_draw",

      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div className="rive-face">
      <RiveComponent />
    </div>
  );
}
