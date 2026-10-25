import { useTranslation } from "react-i18next";
import type { ReverAvatarButtonProps } from "./RevertAvatarButton.types";
import AvatarActionButton from "../../../AvatarActionButton/AvatarActionButton";
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
    <AvatarActionButton
      handleClick={handleClick}
      labelText={t("forms.update-user-details.revert-avatar-btn-label")}
    >
      <RiArrowGoBackFill className="text-2xl text-brand" aria-hidden="true" />
    </AvatarActionButton>
  );
}
