import type { ChangeColorButtonProps } from "./ChangeColorButton.types";
import { useTranslation } from "react-i18next";
import { FaPaintBrush } from "@/assets/icons/icon";

/**
 * Renders a button to change the initials avatar background and text color
 *
 * Props are defined in {@link ChangeColorButtonProps}.
 */
export default function ChangeColorButton({
  handleClick,
}: ChangeColorButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <button
      className="flex justify-center items-center w-11 h-11
              bg-white hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-900
                theme-transition  
                border-2 border-solid border-input rounded-full cursor-pointer
                focus-visible:focus-ring focus-visible:outline-offset-2
                md:w-12.5 md:h-12.5"
      type="button"
      onClick={handleClick}
      aria-label={t(
        "forms.auth.change-initials-avatar-color.change-color-button",
      )}
    >
      <FaPaintBrush className="text-xl text-brand" aria-hidden="true" />
    </button>
  );
}
