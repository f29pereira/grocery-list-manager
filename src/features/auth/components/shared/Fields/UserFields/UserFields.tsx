import { useTranslation } from "react-i18next";
import InitialsAvatarField from "./AvatarField/InitialsAvatarField/InitialsAvatarField";
import { nameFieldValidation } from "../../../utils/validation.utils";
import NameField from "./NameField/NameField";

/**
 * Renders the form fields:
 * - Initials avatar
 * - First name
 * - Last name
 */
export default function UserFields() {
  // Translation
  const { t } = useTranslation();

  return (
    <>
      <div className="h-42.5 mt-4 mb-10">
        <InitialsAvatarField
          styles="w-25 h-25 md:w-30 md:h-30"
          fontStyles="text-3xl lg:text-4xl"
        />
      </div>

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
