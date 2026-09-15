import type { SubmitButtonProps } from "@/components/shared/Form/SubmitButton/SubmitButton.types";

/**
 * Props for the CreateAccountButton component
 * @property isSubmitting - is the create account form submitting
 */
export type CreateAccountButtonProps = Pick<SubmitButtonProps, "isSubmitting">;
