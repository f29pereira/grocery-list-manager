import { useTranslation } from "react-i18next";
import { useWatch } from "react-hook-form";
import type { UpdatePasswordButtonProps } from "./UpdateUserPasswordButton.types";
import type { UpdatePasswordFields } from "../UpdateUserPasswordForm.types";
import { IoMdCheckmark } from "@/assets/icons/icon";
import SubmitButton from "@/components/ui/Buttons/SubmitButton/SubmitButton";

/**
 * Renders an update password button
 *
 * If the form is submitting, displays a loading icon with spin animation instead of checkmark icon
 *
 * Props are defined in {@link UpdatePasswordButtonProps}.
 */
export default function UpdateUserPasswordButton({
  isSubmitting,
}: UpdatePasswordButtonProps) {
  // Translation
  const { t } = useTranslation();

  // React Hook Form
  const fieldValues = useWatch<UpdatePasswordFields>({
    name: ["currentPassword", "newPassword", "confirmPassword"],
  });

  const isFormFilled = fieldValues.every((field) => field.trim() !== "");

  return (
    <SubmitButton
      styles="bg-button 
            shadow-lg shadow-green-600/50 
            hover:bg-button-hover
            disabled:hover:bg-button"
      isSubmitting={isSubmitting}
      isDisabled={!isFormFilled}
      buttonIcon={
        <IoMdCheckmark
          className="text-2xl text-button-label"
          aria-hidden="true"
        />
      }
    >
      <span
        className="font-bold 
                  text-md text-button-label
                  lg:text-base"
      >
        {t("forms.update-password.title")}
      </span>
    </SubmitButton>
  );
}
