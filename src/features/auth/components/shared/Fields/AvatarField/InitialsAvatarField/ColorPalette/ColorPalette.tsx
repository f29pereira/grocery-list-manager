import { COLOR_PALETTE_LIST } from "@/constants/app.constants";
import ColorInput from "./ColorInput/ColorInput";
import ColorLabel from "./ColorLabel/ColorLabel";

/**
 * Renders the list of color palette radio buttons
 */
export default function ColorPalette() {
  return (
    <fieldset className="flex justify-between items-center mt-10">
      <legend className="sr-only">Avatar color</legend>
      {COLOR_PALETTE_LIST.map((color) => (
        <div key={color}>
          <ColorInput value={color} />
          <ColorLabel value={color} />
        </div>
      ))}
    </fieldset>
  );
}
