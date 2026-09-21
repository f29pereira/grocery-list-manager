import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import Logo from "@/components/shared/Logo/Logo";
import AuthenticateAccountForm from "./AuthenticateAccountForm/AuthenticateAccountForm";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

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
    <div
      className="min-h-screen px-6 py-10
                md:px-10
                lg:flex lg:justify-center lg:items-center lg:p-0"
    >
      <Card
        styles="relative px-6 py-10 
              sm:px-10 md:px-20
              lg:w-200 lg:h-187.5 lg:px-40"
      >
        <div className="flex justify-center mb-10">
          <Logo styles="text-brand hover:text-brand-hover" />
        </div>

        {/*Main title*/}
        <h1
          className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-2xl"
        >
          {t("forms.signIn.title")}
        </h1>

        <AuthenticateAccountForm />

        {/*TO DO: Add Google account*/}

        {/*Sign Up link*/}
        <div className="flex justify-center items-center gap-2 mt-10">
          <p className="text-paragraph">{t("forms.signIn.signUp-message")}</p>
          <NavigationLink
            styles="font-bold 
                  text-base text-link
                  theme-transition
                  hover:text-link-hover 
                  hover:underline hover:underline-offset-8 
                  hover:decoration-text-link"
            to="/signup"
          >
            {t("forms.signIn.signUp-link")}
          </NavigationLink>
        </div>
      </Card>
    </div>
  );
}
