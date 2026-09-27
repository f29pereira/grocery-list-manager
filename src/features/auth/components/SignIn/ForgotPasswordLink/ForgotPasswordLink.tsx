import { useTranslation } from "react-i18next";
import AppLink from "@/components/ui/Links/AppLink/AppLink";

/**
 * Renders the forgot password link
 */
export default function ForgotPasswordLink() {
  // Translation
  const { t } = useTranslation();

  return (
    <AppLink
      styles="text-sm text-link
            theme-transition
            hover:text-link-hover 
            hover:underline hover:underline-offset-8 
            hover:decoration-text-link"
      to="/password-reset"
    >
      <span>{t("forms.signIn.forgot-password-link")}</span>
    </AppLink>
  );
}
