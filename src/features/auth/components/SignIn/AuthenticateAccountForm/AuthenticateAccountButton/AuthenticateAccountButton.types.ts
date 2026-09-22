import type { SubmitButtonProps } from "@/components/ui/SubmitButton/SubmitButton.types";

/**
 * Props for the AuthenticateAccountButton component
 * @property isSubmitting - is the authenticate account form submitting
 */
export type AuthenticateAccountButtonProps = Pick<
  SubmitButtonProps,
  "isSubmitting"
>;
