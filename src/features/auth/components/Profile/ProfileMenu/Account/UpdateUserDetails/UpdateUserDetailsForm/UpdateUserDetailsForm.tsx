import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useFormMessage from "@/hooks/useFormMessage";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { getGenericDocumentErrorMessage } from "@/utils/common.utils";
import { nameFieldValidation } from "@/features/auth/components/utils/validation.utils";
import { updateUserDetailsDocument } from "./UpdateUserDetailsForm.utils";
import { DEFAULT_INITIALS_AVATAR_COLOR } from "@/constants/app.constants";
import InitialsAvatarField from "@/features/auth/components/shared/Fields/AvatarField/InitialsAvatarField/InitialsAvatarField";
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
      initialsAvatarColor:
        authUser?.details?.initialsAvatarColor ?? DEFAULT_INITIALS_AVATAR_COLOR,
      firstName: authUser?.details?.firstName ?? "",
      lastName: authUser?.details?.lastName ?? "",
    },
  });

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    control,
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
        const avatarColor = data.initialsAvatarColor;
        const firstName = data.firstName;
        const lastName = data.lastName;

        await updateUserDetailsDocument(
          authUser.user.uid,
          avatarColor,
          firstName,
          lastName,
        );

        setAuthUser((prev) =>
          prev && prev.user
            ? {
                ...prev,
                details: {
                  initialsAvatarColor: avatarColor,
                  firstName: firstName,
                  lastName: lastName,
                },
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
        className="flex flex-col justify-between h-full"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <div className="h-42.5 mb-10">
          <InitialsAvatarField
            control={control}
            styles="w-25 h-25"
            fontStyles="text-3xl"
          />
        </div>

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
