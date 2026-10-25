import { useTranslation } from "react-i18next";
import type { ReverAvatarButtonProps } from "./RevertAvatarButton.types";
import { RiArrowGoBackFill } from "@/assets/icons/icon";

/**
 * Renders a button that removes the current selected avatar file
 *
 * The button features a pop-in animation
 *
 * Props are defined in {@link ReverAvatarButtonProps}.
 */
export default function RevertAvatarButton({
  handleClick,
}: ReverAvatarButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <button
      className="flex justify-center items-center w-11 h-11 
              bg-white dark:bg-slate-950 theme-transition
                border-2 border-solid border-input rounded-full cursor-pointer
                focus-visible:focus-ring focus-visible:outline-offset-2
              hover:bg-slate-200 dark:hover:bg-slate-900
                motion-safe:animate-pop-in
                md:w-12.5 md:h-12.5"
      type="button"
      onClick={handleClick}
      aria-label={t("forms.update-user-details.revert-avatar-btn-label")}
    >
      <RiArrowGoBackFill className="text-2xl text-brand" aria-hidden="true" />
    </button>
  );
}
