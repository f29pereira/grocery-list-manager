import clsx from "clsx";
import type { ColorLabelProps } from "./ColorLabel.types";
import { getInitialsAvatarStyles } from "@/features/auth/components/Profile/ProfileAvatar/InitialsAvatar/InitialsAvatar.utils";

/**
 * Renders the label for a color palette radio button
 */
export default function ColorLabel({ value }: ColorLabelProps) {
  return (
    <label
      className={clsx(
        "block w-7.5 h-7.5",
        "border-2 border-solid border-slate-300 rounded-full",
        "cursor-pointer",
        "peer-checked:inset-ring-4 peer-checked:ring-white",
        "peer-focus-visible:focus-ring peer-focus-visible:outline-offset-2",
        getInitialsAvatarStyles(value),
      )}
      htmlFor={`avatar-color-${value}`}
    >
      <span className="sr-only">{value}</span>
    </label>
  );
}
