import { useTranslation } from "react-i18next";
import UpdateUserDetailsForm from "./UpdateUserDetailsForm/UpdateUserDetailsForm";
/**
 * Renders the form to update the user details
 */
export default function UpdateUserDetails() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="h-full md:max-w-112.5 md:mx-auto">
      <div className="flex flex-col h-full">
        {/*Main title*/}
        <h2
          className="mb-8  mt-4
                  font-black 
                  text-center text-2xl text-title
                  focus-visible:outline-none
                  lg:text-left xl:text-3xl"
        >
          {t("forms.signUp.user-details-step.title")}
        </h2>

        <UpdateUserDetailsForm />
      </div>
    </div>
  );
}
