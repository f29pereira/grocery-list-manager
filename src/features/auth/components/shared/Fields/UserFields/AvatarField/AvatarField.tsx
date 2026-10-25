import { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import useInputValidation from "@/hooks/useInputValidation";
import ImageAvatarField from "./ImageAvatarField/ImageAvatarField";
import InitialsAvatarField from "./InitialsAvatarField/InitialsAvatarField";
import FieldErrorMessage from "@/components/shared/Form/Field/FieldErrorMessage/FieldErrorMessage";

/**
 * Renders the avatar field
 *
 * Display priority:
 * - New avatar file
 * - Saved user's avatar
 * - Initials avatar
 */
export default function AvatarField() {
  // Context
  const { authUser } = useAuth();

  // React Hook Form: context
  const {
    control,
    formState: { errors },
  } = useFormContext<UserDetailsFields>();

  const avatarFile = useWatch({
    control,
    name: "avatarFile",
  });

  const newAvatarFile = avatarFile?.[0];

  // Custom Hook
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  // State
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    if (!newAvatarFile) {
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(avatarFile[0]);

    // Clean-up function
    return () => {
      reader.onload = null;
      reader.abort();
    };
  }, [avatarFile, newAvatarFile]);

  const avatarPreview = newAvatarFile ? imagePreview : "";
  const imageSrc = avatarPreview || authUser?.details?.avatarUrl;

  return (
    <div className="h-42.5 mt-4 mb-10">
      {imageSrc ? (
        <>
          <ImageAvatarField imageUrl={imageSrc} />

          {isInputInvalid("avatarFile") && (
            <FieldErrorMessage
              errorId="avatar-image-error"
              errorMessage={getInputErrorMessage("avatarFile")}
            />
          )}
        </>
      ) : (
        <InitialsAvatarField
          styles="w-full h-full"
          fontStyles="text-3xl lg:text-4xl"
        />
      )}
    </div>
  );
}
