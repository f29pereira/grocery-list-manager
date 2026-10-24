import type { AvatarWrapperProps } from "./AvatarWrapper.types";

/**
 * Renders a rounded border to wrap the avatar
 *
 * Props are defined in {@link AvatarWrapperProps}.
 */
export default function AvatarWrapper({ children }: AvatarWrapperProps) {
  return (
    <div
      className="w-27.5 h-27.5 mx-auto
                border-4 border-solid border-input rounded-full
                md:w-30 md:h-30
                lg:w-31.25 lg:h-31.25
                2xl:w-32.5 2xl:h-32.5"
    >
      {children}
    </div>
  );
}
