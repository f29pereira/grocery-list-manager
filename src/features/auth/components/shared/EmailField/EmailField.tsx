import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import type { EmailFieldProps } from "./EmailField.types";
import type { AuthenticationFields } from "../../types/auth.types";
import useInputValidation from "@/hooks/useInputValidation";
import FieldHeader from "@/components/shared/Form/FieldHeader/FieldHeader";

/**
 * Renders the email field
 *
 * Displays an error message if:
 * - No email is provided
 * - The provided email is invalid
 *
 * Props are defined in {@link EmailFieldProps}.
 */
export default function EmailField({ validation }: EmailFieldProps) {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthenticationFields>();

  // Custom Hook
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  return (
    <>
      <FieldHeader
        inputId="email"
        labelText={t("forms.signUp.auth-step.email-label")}
        errorId="email-error"
        errorMessage={getInputErrorMessage("email")}
      />

      {/*Email input*/}
      <input
        className={clsx(
          "w-full h-12 px-4 py-2",
          "text-base text-paragraph",
          "border-2 border-solid border-input rounded-full",
          "focus:outline-none",
          isInputInvalid("email")
            ? "border-input-error focus:border-input-error"
            : "focus:border-focus",
        )}
        id="email"
        type="email"
        autoComplete="email"
        placeholder="e.g johndoe@lorem.com"
        aria-invalid={isInputInvalid("email")}
        aria-describedby="email-error"
        {...register("email", validation(t))}
      />
    </>
  );
}
