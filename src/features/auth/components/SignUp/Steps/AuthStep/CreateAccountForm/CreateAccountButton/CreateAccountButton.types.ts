import type { SubmitButtonProps } from "@/components/ui/SubmitButton/SubmitButton.types";

/**
 * Props for the CreateAccountButton component
 * @property isSubmitting - is the create account form submitting
 */
export type CreateAccountButtonProps = Pick<SubmitButtonProps, "isSubmitting">;
