import { useTranslation } from "react-i18next";
import UpdateUserPasswordForm from "./UpdateUserPasswordForm/UpdateUserPasswordForm";

/**
 * Renders the form to update the user password
 */
export default function UpdateUserPassword() {
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
        {t("forms.update-password.title")}
      </h2>

      <UpdateUserPasswordForm />
    </div>
  );
}
