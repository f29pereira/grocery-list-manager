import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { useForm, FormProvider } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { addUserDetailsDocument } from "./AddUserDetailsForm.utils";
import useFormMessage from "@/hooks/useFormMessage";
import { getGenericDocumentErrorMessage } from "@/utils/common.utils";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
import UserFields from "../Fields/UserFields/UserFields";
import AddUserDetailsButton from "./AddUserDetailsButton/AddUserDetailsButton";

/**
 * Renders the add user details form with First name and Last name fields
 */
export default function AddUserDetailsForm() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser, setAuthUser } = useAuth();

  // Custom Hook
  const [formMessage, clearFormMessage, showErrorMessage] = useFormMessage();

  // React Hook Form: methods
  const methods = useForm<UserDetailsFields>();

  // React Hook Form: context for inputs
  const {
    formState: { isSubmitting },
  } = methods;

  /**
   * Submits the user details form
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

        await addUserDetailsDocument(authUser.user.uid, firstName, lastName);

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
      }
    } catch (error) {
      const errorMessage = getGenericDocumentErrorMessage(t, error);
      showErrorMessage(errorMessage);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="md:max-w-112.5 md:mx-auto"
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
            description={t("forms.signUp.user-details-step.submit-button")}
          />
        </div>
      </form>
    </FormProvider>
  );
}
