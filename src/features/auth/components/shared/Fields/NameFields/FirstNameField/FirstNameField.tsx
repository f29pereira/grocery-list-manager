import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import type { FirstNameFieldProps } from "./FirstNameField.types";
import type { UserDetailsFields } from "../../../../types/auth.types";
import useInputValidation from "@/hooks/useInputValidation";
import FieldHeader from "@/components/shared/Form/FieldHeader/FieldHeader";

/**
 * Renders the first name field
 *
 * Displays an error message if:
 * - No first name is provided
 * - The provided first name is invalid
 *
 * Props are defined in {@link FirstNameFieldProps}.
 */
export default function FirstNameField({ validation }: FirstNameFieldProps) {
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
    <div className="mb-8">
      <FieldHeader
        inputId="first-name"
        labelText={t("forms.signUp.user-details-step.name.first-name-label")}
        errorId="first-name-error"
        errorMessage={getInputErrorMessage("firstName")}
      />

      {/*First Name field*/}
      <input
        className={clsx(
          "w-full h-12 px-4 py-2",
          "text-base text-paragraph",
          "border-2 border-solid border-input rounded-full",
          "focus:outline-none",
          isInputInvalid("firstName")
            ? "border-input-error focus:border-input-error"
            : "focus:border-focus",
        )}
        id="first-name"
        type="text"
        autoComplete="given-name"
        aria-invalid={isInputInvalid("firstName")}
        aria-describedby="first-name-error"
        {...register("firstName", validation(t))}
      />
    </div>
  );
}
