import type { InitialsAvatarProps } from "@/features/auth/components/Profile/ProfileAvatar/InitialsAvatar/InitialsAvatar.types";
import type { Control } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";

/**
 * Props for the InitialsAvatarField component
 * @property styles     - (optional) Tailwind CSS classes for the initials container
 * @property fontStyles - (optional) Tailwind CSS classes for the initials text
 * @property control    - React Hook Form control object used by the useWatch hook
 */
export type InitialsAvatarFieldProps = Pick<
  InitialsAvatarProps,
  "styles" | "fontStyles"
> & {
  control: Control<UserDetailsFields>;
};
