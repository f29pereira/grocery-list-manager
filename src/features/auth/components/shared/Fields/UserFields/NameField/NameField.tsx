import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import type { NameFieldProps } from "./NameField.types";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";
import useInputValidation from "@/hooks/useInputValidation";
import FieldLabel from "@/components/shared/Form/Field/FieldLabel/FieldLabel";
import FieldErrorMessage from "@/components/shared/Form/Field/FieldErrorMessage/FieldErrorMessage";

/**
 * Renders a name label and input field
 *
 * If the input is invalid, displays an error message
 *
 * Props are defined in {@link NameFieldProps}.
 */
export default function NameField({
  inputId,
  labelText,
  autoComplete,
  registerName,
  validation,
}: NameFieldProps) {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const {
    register,
    formState: { errors },
  } = useFormContext<UserDetailsFields>();

  // Custom Hook
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  return (
    <>
      <FieldLabel inputId={inputId} labelText={labelText} />

      <div className="relative">
        <input
          className={clsx(
            "w-full h-12 px-4 py-2",
            "text-base text-paragraph",
            "border-2 border-solid border-input rounded-full",
            "focus:outline-none",
            isInputInvalid(registerName)
              ? "border-input-error focus:border-input-error"
              : "focus:border-focus",
          )}
          id={inputId}
          type="text"
          autoComplete={autoComplete}
          aria-invalid={isInputInvalid(registerName)}
          aria-describedby={`${inputId}-error`}
          {...register(registerName, validation(t))}
        />

        {isInputInvalid(registerName) && (
          <FieldErrorMessage
            errorId={`${inputId}-error`}
            errorMessage={getInputErrorMessage(registerName)}
          />
        )}
      </div>
    </>
  );
}
