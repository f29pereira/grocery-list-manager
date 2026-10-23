import { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import ImageAvatarField from "./ImageAvatarField/ImageAvatarField";
import InitialsAvatarField from "./InitialsAvatarField/InitialsAvatarField";

/**
 * Renders the field: Image avatar or Initials avatar if no image URL is available
 */
export default function AvatarField() {
  // Context
  const { authUser } = useAuth();

  // React Hook Form: context
  const { control } = useFormContext<UserDetailsFields>();

  const avatarFile = useWatch({
    control,
    name: "avatarFile",
  });

  // State
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    if (!avatarFile) {
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
  }, [avatarFile]);

  return (
    <div className="h-42.5 mt-4 mb-10">
      {authUser?.details?.avatarUrl || imagePreview !== "" ? (
        <ImageAvatarField imageUrl={imagePreview} />
      ) : (
        <InitialsAvatarField
          styles="w-full h-full"
          fontStyles="text-3xl lg:text-4xl"
        />
      )}
    </div>
  );
}
