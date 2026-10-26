import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { updatePassword } from "firebase/auth";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useFormMessage from "@/hooks/useFormMessage";
import useRemountKey from "@/hooks/useRemountKey";
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
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
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

  // Custom Hook
  const [formMessage, clearFormMessage, showErrorMessage, showSuccessMessage] =
    useFormMessage();
  const [formKey, incrementFormKey] = useRemountKey();

  // React Hook Form: methods
  const defaultFormValues: UpdatePasswordFields = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const methods = useForm<UpdatePasswordFields>({
    defaultValues: defaultFormValues,
  });

  // React Hook Form: context for inputs
  const {
    reset,
    setError,
    formState: { isSubmitting },
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
    clearFormMessage();

    try {
      if (authUser?.user && authUser.user.email) {
        const user = authUser.user;
        const email = authUser.user.email;
        const currentPassword = data.currentPassword;
        const newPassword = data.newPassword;

        await reauthenticateUserWithCredential(user, email, currentPassword);
        await updatePassword(user, newPassword);

        reset(defaultFormValues);
        incrementFormKey();

        showSuccessMessage(t("forms.update-password.success-message"));
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
        showErrorMessage(errorText);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col justify-between h-full overflow-hidden"
        key={formKey}
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
          <SubmitMessage
            status={formMessage.status}
            message={formMessage.message}
          />
        </div>

        <div className="flex justify-center mt-2 mb-4">
          <UpdateUserPasswordButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
