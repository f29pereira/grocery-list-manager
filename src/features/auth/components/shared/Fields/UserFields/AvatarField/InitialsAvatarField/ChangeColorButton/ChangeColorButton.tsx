import clsx from "clsx";
import type { ChangeColorButtonProps } from "./ChangeColorButton.types";
import { useTranslation } from "react-i18next";
import AvatarActionButton from "../../AvatarActionButton/AvatarActionButton";
import { FaPaintBrush } from "@/assets/icons/icon";

/**
 * Renders a button to change the initials avatar background and text color
 *
 * Props are defined in {@link ChangeColorButtonProps}.
 */
export default function ChangeColorButton({
  handleClick,
  isToggled,
}: ChangeColorButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <AvatarActionButton
      styles={clsx(
        isToggled
          ? "bg-slate-200 dark:bg-slate-800"
          : "bg-white dark:bg-slate-950",
      )}
      handleClick={handleClick}
      labelText={t(
        "forms.auth.change-initials-avatar-color.change-color-button",
      )}
    >
      <FaPaintBrush className="text-2xl text-brand" aria-hidden="true" />
    </AvatarActionButton>
  );
}
