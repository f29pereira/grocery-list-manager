/**
 * Props for the FieldErrorMessage component
 * @propery  errorId      - id to match the input field aria-describedby property
 * @property errorMessage - error message
 */
export type FieldErrorMessageProps = {
  errorId: string;
  errorMessage: string | undefined;
};
