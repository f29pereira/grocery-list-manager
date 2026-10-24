import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useFormMessage from "@/hooks/useFormMessage";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { getGenericDocumentErrorMessage } from "@/utils/common.utils";
import { updateUserDetailsDocument } from "./UpdateUserDetailsForm.utils";
import { DEFAULT_INITIALS_AVATAR_COLOR } from "@/constants/app.constants";
import { isFailedUpload, uploadAvatarImage } from "@/lib/cloudinary/cloudinary";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
import UserFields from "@/features/auth/components/shared/Fields/UserFields/UserFields";
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
      avatarFile: null,
      firstName: authUser?.details?.firstName ?? "",
      lastName: authUser?.details?.lastName ?? "",
    },
  });

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        const avatarFile = data.avatarFile;
        const firstName = data.firstName;
        const lastName = data.lastName;

        const currentAvatarUrl = authUser.details?.avatarUrl
          ? authUser.details.avatarUrl
          : "";

        const url = avatarFile?.[0]
          ? await uploadAvatarImage(avatarFile[0])
          : currentAvatarUrl;

        await updateUserDetailsDocument(
          authUser.user.uid,
          avatarColor,
          url,
          firstName,
          lastName,
        );

        setAuthUser((prev) =>
          prev && prev.user
            ? {
                ...prev,
                details: {
                  initialsAvatarColor: avatarColor,
                  avatarUrl: url,
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
      if (isFailedUpload(error)) {
        // TO DO: Show cloudinary upload error message
      }

      const errorText = getGenericDocumentErrorMessage(t, error);
      showErrorMessage(errorText);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col justify-between h-full overflow-hidden"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <UserFields />

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
            description={t("forms.generic-buttons.update-submit-button")}
          />
        </div>
      </form>
    </FormProvider>
  );
}
