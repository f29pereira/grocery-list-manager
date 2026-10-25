import { useFormContext, useWatch } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import type { ImageAvatarFieldProps } from "./ImageAvatarField.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import Avatar from "@/features/auth/components/Profile/ProfileAvatar/Avatar/Avatar";
import AddImageInput from "../../../AddImageInput/AddImageInput";
import RevertAvatarButton from "./RevertAvatarButton/RevertAvatarButton";

/**
 * Renders an image avatar field
 *
 * Displays:
 * - RevertAvatarButton component: if the user has a saved avatar (to revert to) and the file input is not null
 *
 * Props are defined in {@link ImageAvatarFieldProps}.
 */
export default function ImageAvatarField({ imageUrl }: ImageAvatarFieldProps) {
  // Context
  const { authUser } = useAuth();

  // React Hook Form: context
  const { control, setValue, clearErrors } =
    useFormContext<UserDetailsFields>();

  const avatarFile = useWatch({
    control,
    name: "avatarFile",
  });

  /**
   * Removes the currently selected file from the avatar field and clears any associated errors
   */
  const revertToOriginalAvatar = () => {
    setValue("avatarFile", null);
    clearErrors("avatarFile");
  };

  return (
    <AvatarWrapper>
      <div className="relative w-full h-full">
        <Avatar imageUrl={imageUrl} />

        <div
          className="absolute -right-5 -top-2.5
                    md:-top-3"
        >
          <AddImageInput />
        </div>

        {authUser?.details?.avatarUrl && avatarFile !== null ? (
          <div
            className="absolute -left-5 -bottom-2.5
                     md:-bottom-3"
          >
            <RevertAvatarButton handleClick={revertToOriginalAvatar} />
          </div>
        ) : null}

        {/*TO DO: Add delete button if avatarUrl is being displayed*/}
      </div>
    </AvatarWrapper>
  );
}
