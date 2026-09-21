import type { SubmitButtonProps } from "@/components/ui/SubmitButton/SubmitButton.types";

/**
 * Props for the AddUserDetailsButton component
 * @property isSubmitting - is the add user details form submitting
 */
export type AddUserDetailsButtonProps = Pick<SubmitButtonProps, "isSubmitting">;
