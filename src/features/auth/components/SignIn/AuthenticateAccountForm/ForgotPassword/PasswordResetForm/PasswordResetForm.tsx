import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { PasswordResetFormProps } from "./PasswordResetForm.types";
import type { PasswordResetField } from "./PasswordResetForm.types";
import useErrorMessage from "@/hooks/useErrorMessage";
import { auth } from "@/lib/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  getSendPasswordResetErrorMessage,
  passwordResetEmailFieldValidation,
} from "./PasswordResetForm.utils";
import EmailField from "@/features/auth/components/shared/Fields/EmailField/EmailField";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
import PasswordResetButton from "./PasswordResetButton/PasswordResetButton";

/**
 * Renders the send password reset email form
 */
export default function PasswordResetForm({
  setIsEmailSent,
}: PasswordResetFormProps) {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: methods
  const methods = useForm<PasswordResetField>();

  // React Hook Form: context for email input
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
   * Sends the password reset email
   * @param data email field
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = async (data: PasswordResetField) => {
    clearErrorMessage();

    try {
      await sendPasswordResetEmail(auth, data.email);
      setIsEmailSent(true);
    } catch (error) {
      const errorText = getSendPasswordResetErrorMessage(t, error);
      setErrorMessage(errorText);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="relative md:max-w-112.5 md:mx-auto"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <EmailField validation={passwordResetEmailFieldValidation} />

        <div className="h-17.5 mb-8">
          <SubmitErrorMessage message={errorMessage} />
        </div>

        <PasswordResetButton isSubmitting={isSubmitting} />
      </form>
    </FormProvider>
  );
}
