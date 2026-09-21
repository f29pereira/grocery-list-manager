import { useTranslation } from "react-i18next";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the forgot password link
 */
export default function ForgotPasswordLink() {
  // Translation
  const { t } = useTranslation();

  return (
    <NavigationLink
      styles="text-sm text-link
            theme-transition
            hover:text-link-hover 
            hover:underline hover:underline-offset-8 
            hover:decoration-text-link"
      to="/password-reset"
    >
      <span>{t("forms.signIn.forgot-password-link")}</span>
    </NavigationLink>
  );
}
