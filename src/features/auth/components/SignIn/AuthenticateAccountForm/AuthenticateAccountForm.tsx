import { useNavigate } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import type { AuthenticationFields } from "../../types/auth.types";
import {
  signInFieldsValidation,
  getSignInErrorMessage,
} from "./AuthenticateAccountForm.utils";
import useErrorMessage from "@/hooks/useErrorMessage";
import { auth } from "@/lib/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import EmailField from "../../shared/Fields/EmailField/EmailField";
import PasswordField from "../../shared/Fields/PasswordField/PasswordField";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
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

  // React Router
  const navigate = useNavigate();

  // React Hook Form: methods
  const methods = useForm<AuthenticationFields>();

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isSubmitting },
  } = methods;

  // Custom Hook
  const { errorMessage, setErrorMessage, clearErrorMessage } =
    useErrorMessage();

  /**
   * Signs in the user
   * @param data email and password fields
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = async (data: AuthenticationFields) => {
    clearErrorMessage();

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/"); // TO DO: redirect to "/profile"
    } catch (error) {
      const errorText = getSignInErrorMessage(t, error);
      setErrorMessage(errorText);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="relative w-full"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <EmailField validation={signInFieldsValidation} />
        <PasswordField validation={signInFieldsValidation} />

        <div className="absolute right-0 mt-2">
          <ForgotPasswordLink />
        </div>

        <div className="mt-14">
          <SubmitErrorMessage message={errorMessage} />
        </div>

        <div className="mt-2 sm:mx-auto sm:w-2/3 lg:w-full">
          <AuthenticateAccountButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
