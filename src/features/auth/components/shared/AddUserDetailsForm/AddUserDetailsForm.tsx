import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { useForm, FormProvider } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import FirstNameField from "@/features/auth/components/shared/Fields/NameFields/FirstNameField/FirstNameField";
import LastNameField from "@/features/auth/components/shared/Fields/NameFields/LastNameField/LastNameField";
import { nameFieldValidation } from "../../utils/validation.utils";
import { addUserDetailsDocument } from "./AddUserDetailsForm.utils";
import useFormMessage from "@/hooks/useFormMessage";
import { getGenericDocumentErrorMessage } from "@/utils/common.utils";
import { DEFAULT_INITIALS_AVATAR_COLOR } from "@/constants/app.constants";
import SubmitMessage from "@/components/shared/Form/SubmitMessage/SubmitMessage";
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isSubmitting },
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
        const firstName = data.firstName;
        const lastName = data.lastName;

        await addUserDetailsDocument(authUser.user.uid, firstName, lastName);

        setAuthUser((prev) =>
          prev && prev.user
            ? {
                ...prev,
                details: {
                  initialsAvatarColor: DEFAULT_INITIALS_AVATAR_COLOR,
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
        <div className="mb-15">
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

        <div className="flex justify-center mt-2">
          <AddUserDetailsButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
