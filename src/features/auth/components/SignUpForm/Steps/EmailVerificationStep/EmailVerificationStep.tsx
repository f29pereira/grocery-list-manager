import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendEmailVerification } from "firebase/auth";
import useFocus from "@/hooks/useFocus";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import SendEmailButton from "./SendEmailButton/SendEmailButton";
import NextStepButton from "@/components/ui/StepButtons/NextStepButton/NextStepButton";
import FormErrorMessage from "@/components/shared/Form/FormErrorMessage/FormErrorMessage";
import { sendEmailVerificationErrorMessage } from "./EmailVerificationStep.utils";

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
  const { user } = useAuth();

  // Custom Hook
  const { elementRef } = useFocus<HTMLHeadingElement>();

  // State
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  /**
   * Sends the verification email
   *
   * If an error is catched, sets submitError state to display an error message
   */
  const sendEmail = () => {
    if (user) {
      sendEmailVerification(user)
        .then(() => setIsEmailSent(true))
        .catch((error) => {
          const errorMessage = sendEmailVerificationErrorMessage(t, error);
          setSubmitError(errorMessage);
        });
    }
  };

  return (
    <div>
      {/*Main title*/}
      <h1
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-left lg:text-2xl"
        ref={elementRef}
        tabIndex={-1}
      >
        {t("forms.signUp.email-verification-step.title")}
      </h1>

      <div
        className="mb-8 text-center lg:text-left"
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
            <span className="ml-2 font-bold text-paragraph">{user?.email}</span>
          </p>
        )}
      </div>

      <div
        className="min-h-17.5 overflow-hidden sm:mx-auto sm:w-2/3 lg:w-full"
        aria-live="assertive"
        aria-atomic="true"
      >
        {submitError ? <FormErrorMessage message={submitError} /> : null}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-2/3 lg:w-full">
        {isEmailSent ? (
          <NextStepButton />
        ) : (
          <SendEmailButton handleClick={sendEmail} />
        )}
      </div>
    </div>
  );
}
