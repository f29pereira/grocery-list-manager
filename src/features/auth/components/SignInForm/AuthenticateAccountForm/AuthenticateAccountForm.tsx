import { useNavigate } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import type { AuthenticationFields } from "../../types/auth.types";
import {
  getSignInErrorMessage,
  signInFieldsValidation,
} from "../SignInForm.utils";
import useErrorMessage from "@/hooks/useErrorMessage";
import { auth } from "@/lib/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import EmailField from "../../shared/EmailField/EmailField";
import PasswordField from "../../shared/PasswordField/PasswordField";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
import SubmitButton from "@/components/shared/Form/SubmitButton/SubmitButton";

/**
 * Renders the sign in form with email and password fields
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
  const onSubmit = (data: AuthenticationFields) => {
    clearErrorMessage();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/"); // TO DO: redirect to "/profile"
      })
      .catch((error) => {
        const errorText = getSignInErrorMessage(t, error);
        setErrorMessage(errorText);
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <EmailField validation={signInFieldsValidation} />
        <PasswordField validation={signInFieldsValidation} />

        {/*TO DO: Add Forgot Password link*/}

        <div className="mt-8">
          <SubmitErrorMessage message={errorMessage} />
        </div>

        <div className="mt-2 sm:mx-auto sm:w-2/3 lg:w-full">
          <SubmitButton
            styles="bg-button 
                  shadow-lg shadow-green-600/50 
                  hover:bg-button-hover
                  disabled:hover:bg-button"
            isSubmitting={isSubmitting}
          >
            <span
              className="font-bold 
                  text-lg text-button-label
                  lg:text-base"
            >
              {t("forms.signIn.signIn-button")}
            </span>
          </SubmitButton>
        </div>
      </form>
    </FormProvider>
  );
}
