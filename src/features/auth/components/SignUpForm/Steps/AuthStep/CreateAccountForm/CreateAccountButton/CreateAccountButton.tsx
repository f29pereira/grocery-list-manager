import type { CreateAccountButtonProps } from "./CreateAccountButton.types";
import SubmitButton from "@/components/shared/Form/SubmitButton/SubmitButton";
import { FaUserPlus } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";

/**
 * Renders a create account button
 *
 * Props are defined in {@link CreateAccountButtonProps}.
 */
export default function CreateAccountButton({
  isSubmitting,
}: CreateAccountButtonProps) {
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
        <FaUserPlus className="text-2xl text-button-label" aria-hidden="true" />
      }
    >
      <span
        className="font-bold 
                  text-lg text-button-label
                  lg:text-base"
      >
        {t("forms.signUp.auth-step.submit-btn")}
      </span>
    </SubmitButton>
  );
}
