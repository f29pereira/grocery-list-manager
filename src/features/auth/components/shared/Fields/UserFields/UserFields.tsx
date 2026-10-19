import type { UserFieldsProps } from "./UserFields.types";
import InitialsAvatarField from "./AvatarField/InitialsAvatarField/InitialsAvatarField";
import FirstNameField from "./NameFields/FirstNameField/FirstNameField";
import LastNameField from "./NameFields/LastNameField/LastNameField";

/**
 * Renders the initials avatar, first name and last name fields
 */
export default function UserFields({
  control,
  namefieldValidation,
}: UserFieldsProps) {
  return (
    <>
      <div className="h-42.5 mt-4 mb-10">
        <InitialsAvatarField
          control={control}
          styles="w-25 h-25"
          fontStyles="text-3xl"
        />

        <div className="mb-10">
          <FirstNameField validation={namefieldValidation} />
        </div>

        <div className="mb-8">
          <LastNameField validation={namefieldValidation} />
        </div>
      </div>
    </>
  );
}
