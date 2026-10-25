import { useTranslation } from "react-i18next";
import type { DeleteAvatarButtonProps } from "./DeleteAvatarButton.types";
import AvatarActionButton from "../../../AvatarActionButton/AvatarActionButton";
import { IoIosClose } from "@/assets/icons/icon";

/**
 * Renders a button that removes the user's saved avatar
 *
 * The button features a pop-in animation
 *
 * Props are defined in {@link DeleteAvatarButtonProps}.
 */
export default function DeleteAvatarButton({
  handleClick,
}: DeleteAvatarButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <AvatarActionButton
      handleClick={handleClick}
      labelText={t("forms.update-user-details.remove-avatar-btn-label")}
    >
      <IoIosClose className="text-5xl text-brand" aria-hidden="true" />
    </AvatarActionButton>
  );
}
