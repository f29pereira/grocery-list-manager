import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import type { AuthenticationFields } from "../../../../types/auth.types";
import {
  signUpEmailValidation,
  signUpPasswordValidation,
  getCreateUserErrorMessage,
} from "./CreateAccountForm.utils";
import { useMultiStep } from "@/contexts/MultiStepContext/useMultiStep";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { auth } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import EmailField from "../../../../shared/EmailField/EmailField";
import PasswordField from "../../../../shared/PasswordField/PasswordField";
import CreateAccountButton from "./CreateAccountButton/CreateAccountButton";
import useErrorMessage from "@/hooks/useErrorMessage";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";

/**
 * Renders the create account form with email and password fields
 */
export default function CreateAccountForm() {
  "use no memo"; // Prevents React Hook Form conflict with the React compiler

  // Translation
  const { t } = useTranslation();

  // Context
  const { nextStep } = useMultiStep();
  const { setAuthUser } = useAuth();
  const { errorMessage, setErrorMessage, clearErrorMessage } =
    useErrorMessage();

  // React Hook Form: methods
  const methods = useForm<AuthenticationFields>();

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isSubmitting },
  } = methods;

  /**
   * Submits the authentication form
   * @param data email and password fields
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = (data: AuthenticationFields) => {
    clearErrorMessage();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        setAuthUser({ user: userCredential.user, details: null });
        nextStep();
      })
      .catch((error) => {
        const errorText = getCreateUserErrorMessage(t, error);
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
        <EmailField validation={signUpEmailValidation} />
        <PasswordField validation={signUpPasswordValidation} />

        <SubmitErrorMessage message={errorMessage} />

        <div className="mt-2 sm:mx-auto sm:w-2/3 lg:w-full">
          <CreateAccountButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
