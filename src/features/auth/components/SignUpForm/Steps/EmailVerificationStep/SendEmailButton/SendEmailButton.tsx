import type { SendEmailButtonProps } from "./SendEmailButton.types";
import { LuSend } from "@/assets/icons/icon";
import SubmitButton from "@/components/shared/Form/SubmitButton/SubmitButton";
import { useTranslation } from "react-i18next";

/**
 * Renders a send verification email button
 *
 * Props are defined in {@link SendEmailButtonProps}.
 */
export default function SendEmailButton({
  handleClick,
  isSubmitting,
}: SendEmailButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <SubmitButton
      styles="bg-button shadow-lg shadow-green-600/50 hover:bg-brand-hover"
      handleClick={handleClick}
      isSubmitting={isSubmitting}
      buttonIcon={
        <LuSend
          className="text-2xl text-button-label rotate-12"
          aria-hidden="true"
        />
      }
    >
      <span
        className="font-bold 
                  text-md text-button-label 
                  lg:text-base"
      >
        {t("forms.signUp.email-verification-step.send-email-btn")}
      </span>
    </SubmitButton>
  );
}
