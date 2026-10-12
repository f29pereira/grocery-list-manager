import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import LogoHomeLink from "@/components/ui/Links/LogoHomeLink/LogoHomeLink";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import AuthenticateAccountForm from "./AuthenticateAccountForm/AuthenticateAccountForm";
import AppLink from "@/components/ui/Links/AppLink/AppLink";
import GlowingCircles from "@/components/shared/GlowingCircles/GlowingCircles";

/**
 * Renders the user authentication with:
 * - Email and Password sign in form and forgot password link
 * - TO DO: Google Authentication button
 * - Sign up link
 */
export default function SignIn() {
  // Translation
  const { t } = useTranslation();

  return (
    <Card styles="relative w-full lg:w-150">
      <div className="flex justify-center mb-10">
        <LogoHomeLink />
      </div>

      <CardContentWrapper>
        {/*Main title*/}
        <h1
          className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  md:text-2xl"
        >
          {t("forms.signIn.title")}
        </h1>

        <AuthenticateAccountForm />

        {/*TO DO: Add Google account*/}

        {/*Sign Up link*/}
        <div className="flex justify-center items-center gap-2 mt-10 mb-4">
          <p className="text-paragraph">{t("forms.signIn.signUp-message")}</p>
          <AppLink
            styles="font-bold 
                  text-base text-link
                  theme-transition
                  hover:text-link-hover 
                  hover:underline hover:underline-offset-8 
                  hover:decoration-text-link"
            to="/sign-up"
          >
            {t("forms.signIn.signUp-link")}
          </AppLink>
        </div>
      </CardContentWrapper>

      <GlowingCircles />
    </Card>
  );
}
