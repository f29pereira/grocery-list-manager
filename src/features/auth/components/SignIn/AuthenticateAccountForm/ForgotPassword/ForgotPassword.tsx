import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import LogoHomeLink from "@/components/ui/Links/LogoHomeLink/LogoHomeLink";
import PasswordResetForm from "./PasswordResetForm/PasswordResetForm";
import EmailSentIcon from "../../../shared/EmailSentIcon/EmailSentIcon";
import PillNavigationLink from "@/components/ui/Links/PillNavigationLink/PillNavigationLink";

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
      className="flex justify-center items-center min-h-screen px-6
                md:px-10
                lg:p-0"
    >
      <Card
        styles="h-160.5 w-full px-6 py-10 
              sm:px-10 md:px-20
              lg:w-200 lg:h-187.5 lg:px-20"
      >
        <div className="flex justify-center mb-10">
          <LogoHomeLink styles="text-brand hover:text-brand-hover" />
        </div>

        {/*Main title*/}
        <h1
          className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-2xl lg:text-left"
        >
          {t("forms.forgot-password.title")}
        </h1>

        <div
          className="min-h-12 mb-8
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

        <div>
          {!isEmailSent ? (
            <PasswordResetForm setIsEmailSent={setIsEmailSent} />
          ) : (
            <>
              <div className="mb-8">
                <EmailSentIcon />
              </div>

              <PillNavigationLink
                styles="md:max-w-112.5 md:mx-auto 
                  bg-button 
                  shadow-lg shadow-green-600/50 
                  hover:bg-button-hover"
                to="/sign-in"
              >
                <div className="flex justify-center items-center">
                  <span
                    className="font-bold 
                  text-md text-button-label
                  lg:text-base"
                  >
                    {t("forms.signIn.signIn-button")}
                  </span>
                </div>
              </PillNavigationLink>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
