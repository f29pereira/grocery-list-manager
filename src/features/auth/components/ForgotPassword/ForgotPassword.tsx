import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import Logo from "@/components/shared/Logo/Logo";
import SendResetEmailForm from "./PasswordResetForm/PasswordResetForm";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the forgot password screen
 *
 * Displays:
 * If the password reset email wasn't sent:
 * - Email field
 * - Send verification email button
 *
 * If the the password reset email was sent:
 * - Sign in button
 */
export default function ForgotPassword() {
  // Translation
  const { t } = useTranslation();

  // State
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  return (
    <div
      className="min-h-screen px-6 py-10
                md:px-10
                lg:flex lg:justify-center lg:items-center lg:p-0"
    >
      <Card
        styles="px-6 py-10 
              sm:px-10 md:px-20
              lg:w-200 lg:h-187.5 lg:px-10"
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
          {t("forms.forgot-password.title")}
        </h1>

        <div
          className="mb-8 min-h-12
                  text-center 
                  lg:text-left"
          aria-atomic="true"
          aria-live="polite"
        >
          {!isEmailSent ? (
            <p className="text-base text-paragraph">
              {t("forms.forgot-password.description-before-email-send")}
            </p>
          ) : (
            <p className="text-base text-paragraph">
              {t("forms.forgot-password.description-after-email-send")}
            </p>
          )}
        </div>

        {!isEmailSent ? (
          <SendResetEmailForm setIsEmailSent={setIsEmailSent} />
        ) : (
          <NavigationLink to="/signin">
            <span>{t("forms.signIn.signIn-button")}</span>
          </NavigationLink>
        )}
      </Card>
    </div>
  );
}
