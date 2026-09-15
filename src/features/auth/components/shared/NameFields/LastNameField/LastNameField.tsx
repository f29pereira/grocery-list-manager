import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import type { LastNameFieldProps } from "./LastNameField.types";
import type { UserDetailsFields } from "../../../types/auth.types";
import useInputValidation from "@/hooks/useInputValidation";
import FieldHeader from "@/components/shared/Form/FieldHeader/FieldHeader";

/**
 * Renders the last name field
 *
 * Displays an error message if:
 * - No last name is provided
 * - The provided last name is invalid
 *
 * Props are defined in {@link LastNameFieldProps}.
 */
export default function LastNameField({ validation }: LastNameFieldProps) {
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
      <FieldHeader
        inputId="last-name"
        labelText={t("forms.signUp.user-details-step.name.last-name-label")}
        errorId="first-name-error"
        errorMessage={getInputErrorMessage("lastName")}
      />

      {/*Last Name field*/}
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
        id="last-name"
        type="text"
        autoComplete="family-name"
        aria-invalid={isInputInvalid("lastName")}
        aria-describedby="family-name"
        {...register("lastName", validation(t))}
      />
    </>
  );
}
