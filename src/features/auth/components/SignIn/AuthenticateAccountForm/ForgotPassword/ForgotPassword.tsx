import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import LogoHomeLink from "@/components/ui/Links/LogoHomeLink/LogoHomeLink";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import PasswordResetForm from "./PasswordResetForm/PasswordResetForm";
import EmailSentIcon from "../../../shared/EmailSentIcon/EmailSentIcon";
import PillAppLink from "@/components/ui/Links/AppLink/PillAppLink/PillAppLink";
import SignInLink from "./SignInLink/SignInLink";
import GlowingCircles from "@/components/shared/GlowingCircles/GlowingCircles";

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
    <Card
      styles="relative w-full h-137.5 
            md:h-150 lg:w-150"
    >
      <div className="flex justify-center mb-10">
        <LogoHomeLink />
      </div>

      <CardContentWrapper key={isEmailSent ? "sentIcon" : "sendForm"}>
        {/*Main title*/}
        <h1
          className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  md:max-w-112.5 md:mx-auto md:text-left
                  lg:text-2xl"
        >
          {t("forms.forgot-password.title")}
        </h1>

        <div
          className="min-h-12 mb-8 text-center
                  md:max-w-112.5 md:mx-auto md:text-left
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

        <div className="mb-4">
          {!isEmailSent ? (
            <PasswordResetForm setIsEmailSent={setIsEmailSent} />
          ) : (
            <>
              <div className="mb-8">
                <EmailSentIcon />
              </div>

              <PillAppLink
                styles="mx-auto bg-button 
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
              </PillAppLink>
            </>
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-10 mb-4">
          <SignInLink />
        </div>
      </CardContentWrapper>

      <GlowingCircles />
    </Card>
  );
}
