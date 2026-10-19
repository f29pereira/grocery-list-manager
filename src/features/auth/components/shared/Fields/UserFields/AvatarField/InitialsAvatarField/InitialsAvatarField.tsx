import clsx from "clsx";
import { useWatch } from "react-hook-form";
import type { InitialsAvatarFieldProps } from "./InitialsAvatarField.types";
import useToggle from "@/hooks/useToggle";
import {
  getUserInitial,
  getInitialsAvatarStyles,
} from "@/features/auth/components/Profile/ProfileAvatar/InitialsAvatar/InitialsAvatar.utils";
import InitialsAvatar from "@/features/auth/components/Profile/ProfileAvatar/InitialsAvatar/InitialsAvatar";
import ChangeColorButton from "./ChangeColorButton/ChangeColorButton";
import ColorPalette from "./ColorPalette/ColorPalette";

/**
 * Renders a profile avatar with the user's initials and the change avatar colors button
 *
 * Props are defined in {@link InitialsAvatarFieldProps}.
 */
export default function InitialsAvatarField({
  control,
  styles,
  fontStyles,
}: InitialsAvatarFieldProps) {
  // React Hook Form
  const [initialsAvatarColor, firstName, lastName] = useWatch({
    control,
    name: ["initialsAvatarColor", "firstName", "lastName"],
  });

  // Custom Hook
  const [isToggled, toggle] = useToggle();

  const colorStyles = getInitialsAvatarStyles(initialsAvatarColor);
  const firstNameInitial = getUserInitial(firstName);
  const lastNameInitial = getUserInitial(lastName);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative">
          <InitialsAvatar
            styles={clsx(
              "border-4 border-solid border-input",
              colorStyles,
              styles,
            )}
            fontStyles={fontStyles}
            firstNameInitial={firstNameInitial}
            lastNameInitial={lastNameInitial}
          />

          <div
            className="absolute -left-5 -bottom-2.5 
                    md:-left-5 md:-bottom-4"
          >
            <ChangeColorButton handleClick={toggle} />
          </div>
        </div>
      </div>

      {/*TO DO: Add FieldErrorMessage*/}

      {isToggled && <ColorPalette />}
    </>
  );
}
