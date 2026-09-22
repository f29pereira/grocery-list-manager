import { useTranslation } from "react-i18next";
import type { AuthenticateAccountButtonProps } from "./AuthenticateAccountButton.types";
import SubmitButton from "@/components/ui/SubmitButton/SubmitButton";

/**
 * Renders an authenticate account button
 *
 * Props are defined in {@link AuthenticateAccountButtonProps}.
 */
export default function AuthenticateAccountButton({
  isSubmitting,
}: AuthenticateAccountButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <SubmitButton
      styles="bg-button 
            shadow-lg shadow-green-600/50 
            hover:bg-button-hover
            disabled:hover:bg-button"
      isSubmitting={isSubmitting}
    >
      <span
        className="font-bold 
                text-md text-button-label
                lg:text-base"
      >
        {t("forms.signIn.signIn-button")}
      </span>
    </SubmitButton>
  );
}
