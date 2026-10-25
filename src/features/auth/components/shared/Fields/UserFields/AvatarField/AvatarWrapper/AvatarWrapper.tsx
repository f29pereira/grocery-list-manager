import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import useInputValidation from "@/hooks/useInputValidation";
import type { AvatarWrapperProps } from "./AvatarWrapper.types";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";

/**
 * Renders a rounded border to wrap the avatar
 *
 * Props are defined in {@link AvatarWrapperProps}.
 */
export default function AvatarWrapper({ children }: AvatarWrapperProps) {
  // React Hook Form: context
  const {
    formState: { errors },
  } = useFormContext<UserDetailsFields>();

  // Custom Hook
  const { isInputInvalid } = useInputValidation(errors);

  return (
    <div
      className={clsx(
        "w-27.5 h-27.5 mx-auto",
        "border-4 border-solid rounded-full",
        "md:w-30 md:h-30",
        "lg:w-31.25 lg:h-31.25",
        "2xl:w-32.5 2xl:h-32.5",
        isInputInvalid("avatarFile") ? "border-input-error" : "border-input",
      )}
    >
      {children}
    </div>
  );
}
