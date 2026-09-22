import { useTranslation } from "react-i18next";
import type { PasswordResetButtonProps } from "./PasswordResetButton.types";
import { LuSend } from "@/assets/icons/icon";
import SubmitButton from "@/components/ui/SubmitButton/SubmitButton";

/**
 * Renders a send password reset email button
 *
 * Props are defined in {@link PasswordResetButtonProps}.
 */
export default function PasswordResetButton({
  isSubmitting,
}: PasswordResetButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <SubmitButton
      styles="bg-button shadow-lg shadow-green-600/50 hover:bg-brand-hover"
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
        {t("forms.forgot-password.send-email-btn")}
      </span>
    </SubmitButton>
  );
}
