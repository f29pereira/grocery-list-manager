import type { AvatarWrapperProps } from "./AvatarWrapper.types";

/**
 * Renders a rounded border to wrap the avatar
 *
 * Props are defined in {@link AvatarWrapperProps}.
 */
export default function AvatarWrapper({ children }: AvatarWrapperProps) {
  return (
    <div
      className="w-25 h-25 mx-auto
                border-4 border-solid border-input rounded-full
                md:w-30 md:h-30"
    >
      {children}
    </div>
  );
}
