import type { SubmitButtonProps } from "@/components/ui/Buttons/SubmitButton/SubmitButton.types";

/**
 * Props for the AddUserDetailsButton component
 * @property isSubmitting - is the add user details form submitting
 * @property isDisabled   - (optional) is the form disabled
 */
export type AddUserDetailsButtonProps = Pick<
  SubmitButtonProps,
  "isSubmitting" | "isDisabled"
>;
