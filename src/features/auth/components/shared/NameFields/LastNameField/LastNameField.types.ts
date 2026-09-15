import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { UserDetailsFields } from "../../../types/auth.types";

/**
 * Props for the LastNameField component
 * @property validation - React Hook Form field validation
 */
export type LastNameFieldProps = {
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<UserDetailsFields, "lastName">;
};
