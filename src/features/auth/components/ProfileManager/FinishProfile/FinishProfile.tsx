import { useTranslation } from "react-i18next";
import AddUserDetailsForm from "../../shared/AddUserDetailsForm/AddUserDetailsForm";

/**
 * Renders the add user details form for users without complete profile
 */
export default function FinishProfile() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="sm:px-8 md:px-0">
      <div className="md:max-w-112.5 md:mx-auto">
        <h1
          className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-left lg:text-2xl"
        >
          {t("forms.finish-user-profile.title")}
        </h1>

        <p className="mb-8 text-paragraph">
          {t("forms.finish-user-profile.message")}
        </p>
      </div>

      <AddUserDetailsForm />
    </div>
  );
}
