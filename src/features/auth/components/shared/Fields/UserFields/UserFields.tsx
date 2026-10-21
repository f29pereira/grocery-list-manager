import InitialsAvatarField from "./AvatarField/InitialsAvatarField/InitialsAvatarField";
import { nameFieldValidation } from "../../../utils/validation.utils";
import FirstNameField from "./NameFields/FirstNameField/FirstNameField";
import LastNameField from "./NameFields/LastNameField/LastNameField";

/**
 * Renders the form fields:
 * - Initials avatar
 * - First name
 * - Last name
 */
export default function UserFields() {
  return (
    <>
      <div className="h-42.5 mt-4 mb-10">
        <InitialsAvatarField
          styles="w-25 h-25 md:w-30 md:h-30"
          fontStyles="text-3xl lg:text-4xl"
        />
      </div>

      <div className="mb-10">
        <FirstNameField validation={nameFieldValidation} />
      </div>

      <div className="mb-8">
        <LastNameField validation={nameFieldValidation} />
      </div>
    </>
  );
}
