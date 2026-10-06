import { useWatch, type FieldValues } from "react-hook-form";
import type { PasswordFieldProps } from "@/features/auth/components/shared/Fields/PasswordField/PasswordField.type";
import PasswordField from "@/features/auth/components/shared/Fields/PasswordField/PasswordField";
import PasswordRules from "./PasswordRules/PasswordRules";

/**
 * Renders the password field and password rules list
 *
 * Displays an error message if:
 * - No password is provided
 * - The provider password is invalid
 *
 * Props are defined in {@link PasswordFieldProps}.
 */
export default function PasswordFieldWithRules<T extends FieldValues>({
  label,
  autoComplete,
  registerName,
  validation,
}: PasswordFieldProps<T>) {
  // React Hook Form
  const currentPassword = useWatch({ name: registerName });

  return (
    <>
      <PasswordField<T>
        label={label}
        autoComplete={autoComplete}
        registerName={registerName}
        validation={validation}
      />
      <PasswordRules password={currentPassword} />
    </>
  );
}
