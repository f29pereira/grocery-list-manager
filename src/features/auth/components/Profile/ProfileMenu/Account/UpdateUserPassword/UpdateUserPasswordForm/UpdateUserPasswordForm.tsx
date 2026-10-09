import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { updatePassword } from "firebase/auth";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useErrorMessage from "@/hooks/useErrorMessage";
import type { UpdatePasswordFields } from "./UpdateUserPasswordForm.types";
import {
  currentPasswordFieldValidation,
  newPasswordFieldValidation,
  confirmPasswordFieldValidation,
  getUpdatePasswordErrorMessage,
} from "./UpdateUserPasswordForm.utils";
import { reauthenticateUserWithCredential } from "@/features/auth/components/services/auth.services";
import { isUserInvalid } from "@/features/auth/components/utils/errorMessages.utils";
import PasswordField from "@/features/auth/components/shared/Fields/PasswordField/PasswordField";
import PasswordFieldWithRules from "@/features/auth/components/shared/Fields/PasswordFieldWithRules/PasswordFieldWithRules";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
import UpdateUserPasswordButton from "./UpdateUserPasswordButton/UpdateUserPasswordButton";

/**
 * Renders the update user password form with the fields:
 * - Current password
 * - New password
 * - Confirm new password
 */
export default function UpdateUserPasswordForm() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser } = useAuth();
  const { errorMessage, setErrorMessage, clearErrorMessage } =
    useErrorMessage();

  // React Hook Form: methods
  const methods = useForm<UpdatePasswordFields>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    reset,
    setError,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isSubmitting },
  } = methods;

  /**
   * Updates the user password
   * @param data password fields
   *
   * If the user reauthentication fails, displays an error message on the "currentPassword" field
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = async (data: UpdatePasswordFields) => {
    clearErrorMessage();

    try {
      if (authUser?.user && authUser.user.email) {
        const user = authUser.user;
        const email = authUser.user.email;
        const currentPassword = data.currentPassword;
        const newPassword = data.newPassword;

        await reauthenticateUserWithCredential(user, email, currentPassword);
        await updatePassword(user, newPassword);
        reset();
      }
    } catch (error) {
      if (isUserInvalid(error)) {
        setError(
          "currentPassword",
          {
            message: t(
              "error-messages.custom.update-password.current-password",
            ),
          },
          { shouldFocus: true },
        );
      } else {
        const errorText = getUpdatePasswordErrorMessage(t, error);
        setErrorMessage(errorText);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="md:max-w-112.5 md:mx-auto"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <div className="mb-10">
          <PasswordField<UpdatePasswordFields>
            label={t("forms.update-password.fields.current-password")}
            autoComplete="current-password"
            registerName="currentPassword"
            validation={currentPasswordFieldValidation}
          />
        </div>

        <div className="mb-10">
          <PasswordFieldWithRules<UpdatePasswordFields>
            label={t("forms.update-password.fields.new-password")}
            autoComplete="new-password"
            registerName="newPassword"
            validation={newPasswordFieldValidation}
          />
        </div>

        <div className="mb-10">
          <PasswordField<UpdatePasswordFields>
            label={t("forms.update-password.fields.confirm-password")}
            autoComplete="new-password"
            registerName="confirmPassword"
            validation={confirmPasswordFieldValidation}
          />
        </div>

        <div className="h-17.5">
          <SubmitErrorMessage message={errorMessage} />
        </div>
        <div className="mt-2">
          <UpdateUserPasswordButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
