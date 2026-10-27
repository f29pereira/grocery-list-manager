import { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import ImageAvatarField from "./ImageAvatarField/ImageAvatarField";
import InitialsAvatarField from "./InitialsAvatarField/InitialsAvatarField";

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
  const { control } = useFormContext<UserDetailsFields>();

  const [avatarFile, removeAvatar] = useWatch({
    control,
    name: ["avatarFile", "removeAvatar"],
  });

  const newAvatarFile = avatarFile?.[0];

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
      {imageSrc && !removeAvatar ? (
        <ImageAvatarField imageUrl={imageSrc} />
      ) : (
        <InitialsAvatarField
          styles="w-full h-full"
          fontStyles="text-3xl lg:text-4xl"
        />
      )}
    </div>
  );
}
