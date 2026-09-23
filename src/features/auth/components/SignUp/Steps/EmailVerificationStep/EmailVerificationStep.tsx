import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendEmailVerification } from "firebase/auth";
import useFocus from "@/hooks/useFocus";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { sendEmailVerificationErrorMessage } from "./EmailVerificationStep.utils";
import SendEmailButton from "./SendEmailButton/SendEmailButton";
import NextStepButton from "@/components/ui/StepButtons/NextStepButton/NextStepButton";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
import EmailSentIcon from "../../../shared/EmailSentIcon/EmailSentIcon";

/**
 * Renders the email verification step used by the SignUpForm component
 *
 * Displays:
 * If the email verification wasn't sent:
 * - Send verification email button
 *
 * If the email verification was sent:
 * - Email sent icon
 * - Next step button
 */
export default function EmailVerificationStep() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser } = useAuth();
  const { errorMessage, setErrorMessage, clearErrorMessage } =
    useErrorMessage();

  // Custom Hook
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // State
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  /**
   * Sends the verification email
   *
   * If an error is catched, sets submitError state to display an error message
   */
  const sendEmail = async () => {
    clearErrorMessage();

    try {
      if (authUser?.user) {
        setIsSubmittingEmail(true);
        await sendEmailVerification(authUser.user);
        setIsSubmittingEmail(false);
        setIsEmailSent(true);
      }
    } catch (error) {
      const errorMessage = sendEmailVerificationErrorMessage(t, error);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="md:max-w-112.5 md:mx-auto">
      {/*Main title*/}
      <h1
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-left lg:text-2xl"
        ref={elementRef}
        tabIndex={-1}
        aria-label={t("forms.signUp.email-verification-step.title-label")}
      >
        {t("forms.signUp.email-verification-step.title")}
      </h1>

      <div
        className="mb-8 min-h-12
                  text-center 
                  lg:text-left"
        aria-atomic="true"
        aria-live="polite"
      >
        {isEmailSent ? (
          <p className="text-base text-paragraph">
            {t(
              "forms.signUp.email-verification-step.description-after-email-send",
            )}
          </p>
        ) : (
          <p className="text-base text-paragraph">
            {t(
              "forms.signUp.email-verification-step.description-before-email-send",
            )}
            <span className="ml-2 font-bold text-paragraph">
              {authUser?.user?.email}
            </span>
          </p>
        )}
      </div>

      <div className="h-30 mb-8">
        {isEmailSent && <EmailSentIcon />}
        <SubmitErrorMessage message={errorMessage} />
      </div>

      <div>
        {isEmailSent ? (
          <NextStepButton />
        ) : (
          <SendEmailButton
            handleClick={sendEmail}
            isSubmitting={isSubmittingEmail}
          />
        )}
      </div>
    </div>
  );
}
