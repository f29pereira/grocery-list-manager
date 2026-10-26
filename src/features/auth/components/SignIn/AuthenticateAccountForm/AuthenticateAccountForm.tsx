import { useForm, FormProvider } from "react-hook-form";
import type { AuthenticationFields } from "../../types/auth.types";
import {
  signInFieldsValidation,
  getSignInErrorMessage,
} from "./AuthenticateAccountForm.utils";
import useFormMessage from "@/hooks/useFormMessage";
import { auth } from "@/lib/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import EmailField from "../../shared/Fields/EmailField/EmailField";
import PasswordField from "../../shared/Fields/PasswordField/PasswordField";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
import ForgotPasswordLink from "../ForgotPasswordLink/ForgotPasswordLink";
import AuthenticateAccountButton from "./AuthenticateAccountButton/AuthenticateAccountButton";

/**
 * Renders the sign in form with:
 * - Email and Password fields
 * - Forgot password link
 */
export default function AuthenticateAccountForm() {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: methods
  const methods = useForm<AuthenticationFields>();

  // React Hook Form: context for inputs
  const {
    formState: { isSubmitting },
  } = methods;

  // Custom Hook
  const [formMessage, clearFormMessage, showErrorMessage] = useFormMessage();

  /**
   * Signs in the user
   * @param data email and password fields
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = async (data: AuthenticationFields) => {
    clearFormMessage();

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      const errorMessage = getSignInErrorMessage(t, error);
      showErrorMessage(errorMessage);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="relative md:max-w-112.5 md:mx-auto"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <div className="mb-15">
          <EmailField validation={signInFieldsValidation} />
        </div>

        <div className="mb-10">
          <PasswordField<AuthenticationFields>
            label={t("forms.auth.fields.password-label")}
            autoComplete="current-password"
            registerName="password"
            validation={signInFieldsValidation}
          />

          <div className="absolute right-0 mt-2">
            <ForgotPasswordLink />
          </div>
        </div>

        <div className="h-17.5">
          <SubmitMessage
            status={formMessage.status}
            message={formMessage.message}
          />
        </div>

        <div className="mt-2 flex justify-center">
          <AuthenticateAccountButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
