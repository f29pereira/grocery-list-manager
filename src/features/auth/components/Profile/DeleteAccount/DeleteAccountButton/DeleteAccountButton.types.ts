import type { SubmitButtonProps } from "@/components/ui/Buttons/SubmitButton/SubmitButton.types";

/**
 * Props for the DeleteAccountButton component
 * @property isSubmitting - is the delete user action submitting
 * @property isDisabled   - (optional) is the button disabled
 * @property handleClick  - (optional) onClick function
 * @property description  - button description
 */
export type DeleteAccountButtonProps = Pick<
  SubmitButtonProps,
  "isSubmitting" | "isDisabled" | "handleClick"
> & { description: string };
