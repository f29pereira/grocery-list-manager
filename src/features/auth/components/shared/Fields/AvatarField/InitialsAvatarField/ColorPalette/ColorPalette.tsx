import { COLOR_PALETTE_LIST } from "@/constants/app.constants";
import ColorInput from "./ColorInput/ColorInput";
import ColorLabel from "./ColorLabel/ColorLabel";

/**
 * Renders the list of color palette radio buttons
 *
 * The list features a pop-in animation
 */
export default function ColorPalette() {
  return (
    <fieldset
      className="flex justify-center items-center gap-5 mt-10
                sm:gap-10 motion-safe:animate-pop-in"
    >
      <legend className="sr-only">Avatar color</legend>
      {COLOR_PALETTE_LIST.map((color) => (
        <div className="group" key={color}>
          <ColorInput value={color} />
          <ColorLabel value={color} />
        </div>
      ))}
    </fieldset>
  );
}
