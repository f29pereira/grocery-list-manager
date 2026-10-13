import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { PasswordResetFormProps } from "./PasswordResetForm.types";
import type { PasswordResetField } from "./PasswordResetForm.types";
import useFormMessage from "@/hooks/useFormMessage";
import { auth } from "@/lib/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  getSendPasswordResetErrorMessage,
  passwordResetEmailFieldValidation,
} from "./PasswordResetForm.utils";
import EmailField from "@/features/auth/components/shared/Fields/EmailField/EmailField";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
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
  const [formMessage, clearFormMessage, showErrorMessage] = useFormMessage();

  /**
   * Sends the password reset email
   * @param data email field
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = async (data: PasswordResetField) => {
    clearFormMessage();

    try {
      await sendPasswordResetEmail(auth, data.email);
      setIsEmailSent(true);
    } catch (error) {
      const errorMessage = getSendPasswordResetErrorMessage(t, error);
      showErrorMessage(errorMessage);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="relative w-full md:max-w-112.5 md:mx-auto"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <EmailField validation={passwordResetEmailFieldValidation} />

        <div className="h-17.5 mb-8">
          <SubmitMessage
            status={formMessage.status}
            message={formMessage.message}
          />
        </div>

        <div className="flex justify-center mb-4">
          <PasswordResetButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
