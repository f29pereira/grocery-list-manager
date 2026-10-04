import { useTranslation } from "react-i18next";
import UpdateUserDetailsForm from "./UpdateUserDetailsForm/UpdateUserDetailsForm";

/**
 * Renders the form to update the user details
 */
export default function UpdateUserDetails() {
  // Translation
  const { t } = useTranslation();

  return (
    <div>
      {/*Main title*/}
      <h2
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-left lg:text-2xl"
        aria-label={t("forms.signUp.user-details-step.title-label")}
      >
        {t("forms.signUp.user-details-step.title")}
      </h2>

      <UpdateUserDetailsForm />
    </div>
  );
}
