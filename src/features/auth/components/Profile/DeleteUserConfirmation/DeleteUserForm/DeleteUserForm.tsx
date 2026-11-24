import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useFormMessage from "@/hooks/useFormMessage";
import type { DeleteUserAccountFields } from "./DeleteUserForm.types";
import {
  currentPasswordFieldValidation,
  getDeleteUserErrorMessage,
} from "./DeleteUserForm.utils";
import { reauthenticateUserWithCredential } from "../../../services/auth.services";
import { isUserInvalid } from "../../../utils/errorMessages.utils";
import { deleteUserAccountAndDetails } from "./DeleteUserForm.utils";
import PasswordField from "../../../shared/Fields/PasswordField/PasswordField";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
import DeleteAccountButton from "../DeleteAccountButton/DeleteAccountButton";
import GoBackButton from "@/components/ui/Buttons/GoBackButton/GoBackButton";

/**
 * Renders the delete user form with:
 * - Current password field
 * - Submit button
 * - Go Back button
 */
export default function DeleteUserForm() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser } = useAuth();

  // Custom Hook
  const [formMessage, clearFormMessage, showErrorMessage] = useFormMessage();

  // React Hook Form: methods
  const defaultFormValue: DeleteUserAccountFields = {
    currentPassword: "",
  };

  const methods = useForm<DeleteUserAccountFields>({
    defaultValues: defaultFormValue,
  });

  // React Hook Form: context for the current password input
  const {
    setError,
    formState: { isSubmitting },
  } = methods;

  /**
   * Deletes the user's account
   *  @param data current password field
   */
  const onSubmit = async (data: DeleteUserAccountFields) => {
    clearFormMessage();

    try {
      if (authUser?.user && authUser.user.email) {
        const user = authUser.user;
        const email = authUser.user.email;
        const currentPassword = data.currentPassword;

        await reauthenticateUserWithCredential(user, email, currentPassword);
        await deleteUserAccountAndDetails(user);
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
        const errorText = getDeleteUserErrorMessage(t, error);
        showErrorMessage(errorText);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className=""
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
      >
        <div className="mt-10 md:max-w-112.5 md:mx-auto">
          <PasswordField<DeleteUserAccountFields>
            label={t("forms.update-password.fields.current-password")}
            autoComplete="current-password"
            registerName="currentPassword"
            validation={currentPasswordFieldValidation}
          />

          <div className="h-17.5">
            <SubmitMessage
              status={formMessage.status}
              message={formMessage.message}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center gap-10 
                    w-full mt-10 mb-4
                    lg:flex-row"
        >
          <DeleteAccountButton
            isSubmitting={isSubmitting}
            description={t("forms.delete-user.account-screen.delete-btn")}
          ></DeleteAccountButton>

          <GoBackButton
            styles="bg-gray-500 text-button-label
                    shadow-lg shadow-gray-500/50
                    dark:bg-gray-400
                    hover:bg-gray-400 dark:hover:bg-gray-300"
          />
        </div>
      </form>
    </FormProvider>
  );
}
