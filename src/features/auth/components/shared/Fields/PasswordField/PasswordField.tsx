import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import type { PasswordFieldProps } from "./PasswordField.type";
import type { AuthenticationFields } from "../../../types/auth.types";
import useToggle from "@/hooks/useToggle";
import useInputValidation from "@/hooks/useInputValidation";
import FieldHeader from "@/components/shared/Form/FieldHeader/FieldHeader";
import PasswordToggleButton from "./PasswordToggleButton/PasswordToggleButton";

/**
 * Renders the password field
 *
 * Displays an error message if:
 * - No password is provided
 * - The provider password is invalid
 *
 * Props are defined in {@link PasswordFieldProps}.
 */
export default function PasswordField({ validation }: PasswordFieldProps) {
  "use no memo"; // Prevents React Hook Form (watch) conflict with the React compiler

  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AuthenticationFields>();

  const currentPassword = watch("password");

  // Custom Hooks
  const { isToggled, toggle } = useToggle(false); // Password visibility
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  return (
    <>
      <FieldHeader
        inputId="password"
        labelText={t("forms.auth.fields.password-label")}
        errorId="password-error"
        errorMessage={getInputErrorMessage("password")}
      />

      <div className="relative">
        {/*Password input*/}
        <input
          className={clsx(
            "w-full h-12 px-4 py-2",
            "text-base text-paragraph",
            "border-2 border-solid border-input rounded-full",
            "focus:outline-none",
            "placeholder:text-placeholder placeholder:italic",
            isToggled ? "text-base" : "text-lg tracking-widest",
            isInputInvalid("password")
              ? "border-input-error focus:border-input-error"
              : "focus:border-focus",
          )}
          id="password"
          type={isToggled ? "text" : "password"}
          aria-invalid={isInputInvalid("password")}
          aria-describedby="password-error"
          {...register("password", validation(t, currentPassword))}
        />

        <PasswordToggleButton isToggled={isToggled} toggle={toggle} />
      </div>
    </>
  );
}
