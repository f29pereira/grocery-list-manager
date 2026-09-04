import PillButton from "@/components/ui/PillButton/PillButton";
import { FaUserPlus } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";

/**
 * Renders a create account button
 */
export default function CreateAccountButton() {
  // Translation
  const { t } = useTranslation();

  return (
    <PillButton
      styles="bg-brand
                  shadow-lg shadow-green-600/50 
                  hover:bg-brand-hover"
    >
      <div className="flex justify-center items-center gap-4">
        <FaUserPlus className="text-2xl text-white" aria-hidden="true" />
        <span
          className="font-bold 
                          text-lg text-white
                          lg:text-base"
        >
          {t("forms.signUp.auth-step.submit-btn")}
        </span>
      </div>
    </PillButton>
  );
}
