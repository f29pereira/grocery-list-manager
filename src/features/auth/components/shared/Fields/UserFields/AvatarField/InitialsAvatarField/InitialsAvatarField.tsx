import clsx from "clsx";
import { useFormContext, useWatch } from "react-hook-form";
import type { InitialsAvatarFieldProps } from "./InitialsAvatarField.types";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import useToggle from "@/hooks/useToggle";
import {
  getUserInitial,
  getInitialsAvatarStyles,
} from "@/features/auth/components/Profile/ProfileAvatar/InitialsAvatar/InitialsAvatar.utils";
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import InitialsAvatar from "@/features/auth/components/Profile/ProfileAvatar/InitialsAvatar/InitialsAvatar";
import AddImageInput from "../../../AddImageInput/AddImageInput";
import ChangeColorButton from "./ChangeColorButton/ChangeColorButton";
import ColorPalette from "./ColorPalette/ColorPalette";

/**
 * Renders a profile avatar with the user's initials and the change avatar colors button
 *
 * Props are defined in {@link InitialsAvatarFieldProps}.
 */
export default function InitialsAvatarField({
  styles,
  fontStyles,
}: InitialsAvatarFieldProps) {
  // React Hook Form: context
  const { control } = useFormContext<UserDetailsFields>();

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
      <AvatarWrapper>
        <div className="relative w-full h-full">
          <InitialsAvatar
            styles={clsx(colorStyles, styles)}
            fontStyles={fontStyles}
            firstNameInitial={firstNameInitial}
            lastNameInitial={lastNameInitial}
          />

          <div
            className="absolute -right-5 -top-2.5
                      md:-right-4 md:-top-3"
          >
            <AddImageInput />
          </div>

          <div
            className="absolute -left-5 -bottom-2.5
                    md:-left-5 md:-bottom-3"
          >
            <ChangeColorButton handleClick={toggle} isToggled={isToggled} />
          </div>
        </div>
      </AvatarWrapper>

      {/*TO DO: Add FieldErrorMessage*/}

      {isToggled && <ColorPalette />}
    </>
  );
}
