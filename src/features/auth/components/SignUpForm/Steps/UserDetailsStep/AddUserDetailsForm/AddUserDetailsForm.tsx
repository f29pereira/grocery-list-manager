import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { useForm, FormProvider } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import FirstNameField from "@/features/auth/components/shared/NameFields/FirstNameField/FirstNameField";
import LastNameField from "@/features/auth/components/shared/NameFields/LastNameField/LastNameField";
import { nameFieldValidation } from "./AddUserDetailsForm.utils";
import useErrorMessage from "@/hooks/useErrorMessage";
import SubmitErrorMessage from "@/components/shared/Form/SubmitErrorMessage/SubmitErrorMessage";
import AddUserDetailsButton from "./AddUserDetailsButton/AddUserDetailsButton";

/**
 * Renders the add user details form with:
 * - First name and Last name fields
 * - TO DO: add fields
 */
export default function AddUserDetailsForm() {
  "use no memo"; // Prevents React Hook Form conflict with the React compiler

  // Translation
  const { t } = useTranslation();

  // Context
  const { user } = useAuth();
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
  const onSubmit = (data: UserDetailsFields) => {
    clearErrorMessage();

    try {
      /*TO DO: Add user details to firestore*/
    } catch (error) {
      /*TO DO: Display error message*/
      // const errorText =
      // setErrorMessage(errorText);
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
