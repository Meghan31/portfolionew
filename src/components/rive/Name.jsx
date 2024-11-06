import { useRive } from "@rive-app/react-canvas";

export default function Name() {
  const { rive, RiveComponent } = useRive(
    {
      src: "/portfolionew/assets/rive/name.riv",
      stateMachines: "State Machine 1",
      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div className="rive-name">
      <RiveComponent />
    </div>
  );
}
