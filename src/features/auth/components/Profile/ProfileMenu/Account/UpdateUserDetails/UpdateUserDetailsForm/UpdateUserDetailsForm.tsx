import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useFormMessage from "@/hooks/useFormMessage";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { getGenericDocumentErrorMessage } from "@/utils/common.utils";
import { nameFieldValidation } from "@/features/auth/components/utils/validation.utils";
import { updateUserDetailsDocument } from "./UpdateUserDetailsForm.utils";
import FirstNameField from "@/features/auth/components/shared/Fields/NameFields/FirstNameField/FirstNameField";
import LastNameField from "@/features/auth/components/shared/Fields/NameFields/LastNameField/LastNameField";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
import AddUserDetailsButton from "@/features/auth/components/shared/AddUserDetailsForm/AddUserDetailsButton/AddUserDetailsButton";

/**
 * Renders the update user details form with First name and Last name fields
 */
export default function UpdateUserDetailsForm() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser, setAuthUser } = useAuth();

  // Custom hook
  const [formMessage, clearFormMessage, showErrorMessage, showSuccessMessage] =
    useFormMessage();

  // React Hook Form: methods
  const methods = useForm<UserDetailsFields>({
    defaultValues: {
      firstName: authUser?.details?.firstName ?? "",
      lastName: authUser?.details?.lastName ?? "",
    },
  });

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    resetDefaultValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  /**
   * Updates the user details form
   * @param data user detail fields
   *
   * If an error was caught, sets submitError state to display a form error message
   */
  const onSubmit = async (data: UserDetailsFields) => {
    clearFormMessage();

    try {
      if (authUser?.user) {
        const firstName = data.firstName;
        const lastName = data.lastName;

        await updateUserDetailsDocument(authUser.user.uid, firstName, lastName);

        setAuthUser((prev) =>
          prev && prev.user
            ? {
                ...prev,
                details: { firstName: firstName, lastName: lastName },
              }
            : prev,
        );

        resetDefaultValues(data);
        showSuccessMessage(t("forms.update-user-details.success-message"));
      }
    } catch (error) {
      const errorText = getGenericDocumentErrorMessage(t, error);
      showErrorMessage(errorText);
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
          <FirstNameField validation={nameFieldValidation} />
        </div>

        <div className="mb-8">
          <LastNameField validation={nameFieldValidation} />
        </div>

        <div className="h-17.5">
          <SubmitMessage
            status={formMessage.status}
            message={formMessage.message}
          />
        </div>

        <div className="flex justify-center mt-2 mb-4">
          <AddUserDetailsButton
            isSubmitting={isSubmitting}
            isDisabled={!isDirty}
          />
        </div>
      </form>
    </FormProvider>
  );
}
