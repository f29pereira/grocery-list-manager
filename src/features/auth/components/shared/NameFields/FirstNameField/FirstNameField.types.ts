import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UserDetailsFields } from "../../../types/auth.types";

/**
 * Props for the FirstNameField component
 * @property validation - React Hook Form field validation
 */
export type FirstNameFieldProps = {
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<UserDetailsFields, "firstName">;
};
