import type { ImageAvatarFieldProps } from "./ImageAvatarField.types";
import AvatarWrapper from "../AvatarWrapper/AvatarWrapper";
import Avatar from "@/features/auth/components/Profile/ProfileAvatar/Avatar/Avatar";
import AddImageInput from "../../../AddImageInput/AddImageInput";

/**
 * Renders an image avatar field
 *
 * The image features a pop-in animation
 *
 * Props are defined in {@link ImageAvatarFieldProps}.
 */
export default function ImageAvatarField({ imageUrl }: ImageAvatarFieldProps) {
  return (
    <>
      <AvatarWrapper>
        <div className="relative w-full h-full">
          <Avatar imageUrl={imageUrl} />

          <div
            className="absolute -right-5 -top-2.5
                      md:-right-4 md:-top-3"
          >
            <AddImageInput />
          </div>
        </div>
      </AvatarWrapper>
    </>
  );
}
