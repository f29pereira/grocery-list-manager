/**
 * Props for the FieldErrorMessage component
 * @propery  id      - id to match the input field aria-describedby property
 * @property message - error message
 */
export type FieldErrorMessageProps = {
  id: string;
  message: string | undefined;
};
