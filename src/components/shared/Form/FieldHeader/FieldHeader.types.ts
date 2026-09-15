import type { FieldErrorMessageProps } from "./FieldErrorMessage/FieldErrorMessage.types";
import type { FieldLabelProps } from "./FieldLabel/FieldLabel.types";

/**
 * Props for the FieldHeader component
 * @property inputId      - associated input id
 * @property labelText    - label text
 * @propery  errorId      - id to match the field aria-describedby property
 * @property errorMessage - error message
 */
export type FieldHeaderProps = Pick<FieldLabelProps, "inputId" | "labelText"> &
  Pick<FieldErrorMessageProps, "errorId" | "errorMessage">;
