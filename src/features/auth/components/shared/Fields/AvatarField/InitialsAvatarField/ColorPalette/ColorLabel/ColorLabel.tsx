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
        "block w-6.5 h-6.5",
        "rounded-full",
        "cursor-pointer",
        getInitialsAvatarStyles(value),
      )}
      htmlFor={`avatar-color-${value}`}
    >
      <span className="sr-only">{value}</span>
    </label>
  );
}
