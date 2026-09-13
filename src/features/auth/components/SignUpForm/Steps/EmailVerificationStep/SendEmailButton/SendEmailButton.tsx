import type { SendEmailButtonProps } from "./SendEmailButton.types";
import { MdEmail } from "@/assets/icons/icon";
import PillButton from "@/components/ui/PillButton/PillButton";
import { useTranslation } from "react-i18next";

/**
 * Renders a send verification email button
 *
 * Props are defined in {@link SendEmailButtonProps}.
 */
export default function SendEmailButton({ handleClick }: SendEmailButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <PillButton
      styles="bg-button
            shadow-lg shadow-green-600/50 
            hover:bg-brand-hover"
      handleClick={handleClick}
    >
      <div className="flex justify-center items-center gap-4">
        <MdEmail className="text-2xl text-button-label" aria-hidden="true" />
        <span className="font-black text-button-label">
          {t("forms.signUp.email-step.send-email-btn")}
        </span>
      </div>
    </PillButton>
  );
}
