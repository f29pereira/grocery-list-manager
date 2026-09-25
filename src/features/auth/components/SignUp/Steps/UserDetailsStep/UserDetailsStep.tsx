import useFocus from "@/hooks/useFocus";
import { useTranslation } from "react-i18next";
import AddUserDetailsForm from "../../../shared/AddUserDetailsForm/AddUserDetailsForm";

/**
 * Renders the user details step used by the SignUpForm component
 */
export default function UserDetailStep() {
  // Translation
  const { t } = useTranslation();

  // Custom Hook
  const { elementRef } = useFocus<HTMLHeadingElement>();

  return (
    <div>
      {/*Main title*/}
      <h1
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-left lg:text-2xl"
        ref={elementRef}
        tabIndex={-1}
        aria-label={t("forms.signUp.user-details-step.title-label")}
      >
        {t("forms.signUp.user-details-step.title")}
      </h1>

      <AddUserDetailsForm />
    </div>
  );
}
