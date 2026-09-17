import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { useForm, FormProvider } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import FirstNameField from "@/features/auth/components/shared/NameFields/FirstNameField/FirstNameField";
import LastNameField from "@/features/auth/components/shared/NameFields/LastNameField/LastNameField";
import {
  nameFieldValidation,
  addUserDetailsDocument,
} from "./AddUserDetailsForm.utils";
import useErrorMessage from "@/hooks/useErrorMessage";
import { getGenericDocumentErrorMessage } from "@/utils/common.utils";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
import AddUserDetailsButton from "./AddUserDetailsButton/AddUserDetailsButton";

/**
 * Renders the add user details form with First name and Last name fields
 */
export default function AddUserDetailsForm() {
  "use no memo"; // Prevents React Hook Form conflict with the React compiler

  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser, setAuthUser } = useAuth();
  const { errorMessage, setErrorMessage, clearErrorMessage } =
    useErrorMessage();

  // React Hook Form: methods
  const methods = useForm<UserDetailsFields>();

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch,
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
    clearErrorMessage();

    try {
      if (authUser?.user) {
        const firstName = data.firstName;
        const lastName = data.lastName;

        await addUserDetailsDocument(authUser.user.uid, firstName, lastName);

        setAuthUser((prev) =>
          prev && prev.user
            ? {
                ...prev,
                details: { firstName: firstName, lastName: lastName },
              }
            : prev,
        );
        // TO DO: redirect to user profile
      }
    } catch (error) {
      const errorText = getGenericDocumentErrorMessage(t, error);
      setErrorMessage(errorText);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        noValidate
      >
        <FirstNameField validation={nameFieldValidation} />
        <LastNameField validation={nameFieldValidation} />

        <SubmitErrorMessage message={errorMessage} />

        <div className="mt-2 sm:mx-auto sm:w-2/3 lg:w-full">
          <AddUserDetailsButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </FormProvider>
  );
}
