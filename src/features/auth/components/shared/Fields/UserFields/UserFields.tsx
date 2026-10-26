import { useTranslation } from "react-i18next";
import { nameFieldValidation } from "../../../utils/validation.utils";
import AvatarField from "./AvatarField/AvatarField";
import NameField from "./NameField/NameField";

/**
 * Renders the form fields:
 * - Image avatar or Initials avatar
 * - First name
 * - Last name
 */
export default function UserFields() {
  // Translation
  const { t } = useTranslation();

  return (
    <>
      <AvatarField />

      <div className="mb-10">
        <NameField
          inputId="first-name"
          labelText={t("forms.signUp.user-details-step.name.first-name-label")}
          autoComplete="given-name"
          registerName="firstName"
          validation={nameFieldValidation}
        />
      </div>

      <div className="mb-8">
        <NameField
          inputId="last-name"
          labelText={t("forms.signUp.user-details-step.name.last-name-label")}
          autoComplete="family-name"
          registerName="lastName"
          validation={nameFieldValidation}
        />
      </div>
    </>
  );
}
