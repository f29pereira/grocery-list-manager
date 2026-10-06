import { useFormContext, type FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import type { PasswordFieldProps } from "./PasswordField.type";
import useToggle from "@/hooks/useToggle";
import useInputValidation from "@/hooks/useInputValidation";
import FieldHeader from "@/components/shared/Form/FieldHeader/FieldHeader";
import PasswordToggleButton from "./PasswordToggleButton/PasswordToggleButton";

/**
 * Renders the password field
 *
 * Displays an error message if:
 * - No password is provided
 * - The provided password is invalid
 *
 * Props are defined in {@link PasswordFieldProps}.
 */
export default function PasswordField<T extends FieldValues>({
  label,
  autoComplete,
  registerName,
  validation,
}: PasswordFieldProps<T>) {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  // Custom Hooks
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle(false);
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  return (
    <>
      <FieldHeader
        inputId={registerName}
        labelText={label}
        errorId={`${registerName}-error`}
        errorMessage={getInputErrorMessage(registerName)}
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
            isPasswordVisible ? "text-base" : "text-lg tracking-widest",
            isInputInvalid(registerName)
              ? "border-input-error focus:border-input-error"
              : "focus:border-focus",
          )}
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          autoComplete={autoComplete}
          aria-invalid={isInputInvalid(registerName)}
          aria-describedby={`${registerName}-error`}
          {...register(registerName, validation(t))}
        />

        <PasswordToggleButton
          isToggled={isPasswordVisible}
          toggle={toggleIsPasswordVisible}
        />
      </div>
    </>
  );
}
