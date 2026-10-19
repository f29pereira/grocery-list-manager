import type { Control } from "react-hook-form";
import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";

/**
 * Props for the UserDetailsFields component
 * @property control             - React Hook Form control object used by the useWatch hook
 * @property namefieldValidation - React Hook Form field validation for the first name and last name fields
 */
export type UserFieldsProps = {
  control: Control<UserDetailsFields>;
  namefieldValidation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<UserDetailsFields, "firstName" | "lastName">;
};
