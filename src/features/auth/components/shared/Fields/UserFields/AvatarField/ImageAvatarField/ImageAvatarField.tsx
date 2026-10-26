import { useFormContext, useWatch } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import type { ImageAvatarFieldProps } from "./ImageAvatarField.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useInputValidation from "@/hooks/useInputValidation";
import { clearAvatarUrlOnUserDetailsDocument } from "./ImageAvatarField.utils";
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import Avatar from "@/features/auth/components/Profile/ProfileAvatar/Avatar/Avatar";
import AddImageInput from "../../../AddImageInput/AddImageInput";
import RevertAvatarButton from "./Buttons/RevertAvatarButton/RevertAvatarButton";
import DeleteAvatarButton from "./Buttons/DeleteAvatarButton/DeleteAvatarButton";
import FieldErrorMessage from "@/components/shared/Form/Field/FieldErrorMessage/FieldErrorMessage";

/**
 * Renders an image avatar field
 *
 * Displays:
 * - Add image input button
 * - Revert avatar button: if the user has a saved avatar and the file input is not null
 * - Delete avatar button: if the user has a saved avatar and the file input is null
 *
 * Props are defined in {@link ImageAvatarFieldProps}.
 */
export default function ImageAvatarField({ imageUrl }: ImageAvatarFieldProps) {
  // Context
  const { authUser, setAuthUser } = useAuth();

  // React Hook Form: context
  const {
    control,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext<UserDetailsFields>();

  const avatarFile = useWatch({
    control,
    name: "avatarFile",
  });

  // Custom Hook
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  /**
   * Removes the currently selected file from the avatar field and clears any associated errors
   */
  const revertToOriginalAvatar = () => {
    setValue("avatarFile", null);
    clearErrors("avatarFile");
  };

  /**
   * Removes the saved user avatar url and updates the authUser state
   */
  const removeAvatar = async () => {
    try {
      if (authUser?.user) {
        await clearAvatarUrlOnUserDetailsDocument(authUser.user.uid);

        setAuthUser((prev) =>
          prev && prev.user && prev.details
            ? {
                ...prev,
                details: {
                  initialsAvatarColor: prev.details?.initialsAvatarColor,
                  avatarUrl: "",
                  firstName: prev.details?.firstName,
                  lastName: prev.details?.lastName,
                },
              }
            : prev,
        );
      }
    } catch (error) {
      // TO DO: Display error
      // const errorText = getGenericDocumentErrorMessage(t, error);
      // showErrorMessage(errorText);
    }
  };

  return (
    <div className="relative">
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

          {authUser?.details?.avatarUrl && avatarFile === null ? (
            <div
              className="absolute -left-5 -bottom-2.5
                     md:-bottom-3"
            >
              <DeleteAvatarButton handleClick={removeAvatar} />
            </div>
          ) : null}
        </div>
      </AvatarWrapper>

      <div className="absolute mt-4">
        {isInputInvalid("avatarFile") && (
          <FieldErrorMessage
            errorId="avatar-image-error"
            errorMessage={getInputErrorMessage("avatarFile")}
          />
        )}
      </div>
    </div>
  );
}
