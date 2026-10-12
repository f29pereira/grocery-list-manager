import { useTranslation } from "react-i18next";
import { RiArrowGoBackFill } from "@/assets/icons/icon";
import AppLink from "@/components/ui/Links/AppLink/AppLink";

/**
 * Renders the sign in link
 */
export default function SignInLink() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center gap-4">
      <RiArrowGoBackFill className="text-2xl text-link" aria-hidden="true" />
      <AppLink
        styles="text-sm text-link
            theme-transition
            hover:text-link-hover 
            hover:underline hover:underline-offset-8 
            hover:decoration-text-link"
        to="/sign-in"
      >
        <span>{t("forms.forgot-password.signIn-link")}</span>
      </AppLink>
    </div>
  );
}
