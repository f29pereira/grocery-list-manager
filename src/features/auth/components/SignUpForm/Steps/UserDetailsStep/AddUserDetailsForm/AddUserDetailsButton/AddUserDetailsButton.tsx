import SubmitButton from "@/components/shared/Form/SubmitButton/SubmitButton";
import type { AddUserDetailsButtonProps } from "./AddUserDetailsButton.types";
import { FaUserCheck } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";

/**
 * Renders an add user details button
 *
 * If the form is submitting, displays a loading icon with spin animation instead of add user icon
 *
 * Props are defined in {@link AddUserDetailsButtonProps}.
 */
export default function AddUserDetailsButton({
  isSubmitting,
}: AddUserDetailsButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <SubmitButton
      styles="bg-button 
            shadow-lg shadow-green-600/50 
            hover:bg-button-hover
            disabled:hover:bg-button"
      isSubmitting={isSubmitting}
      buttonIcon={
        <FaUserCheck
          className="text-2xl text-button-label"
          aria-hidden="true"
        />
      }
    >
      <span
        className="font-bold 
                  text-lg text-button-label
                  lg:text-base"
      >
        {t("forms.submit-button")}
      </span>
    </SubmitButton>
  );
}
