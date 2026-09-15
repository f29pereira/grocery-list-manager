import type { FieldHeaderProps } from "./FieldHeader.types";
import FieldLabel from "./FieldLabel/FieldLabel";
import FieldErrorMessage from "./FieldErrorMessage/FieldErrorMessage";

/**
 * Renders a field label and error message
 *
 * Props are defined in {@link FieldHeaderProps}.
 */
export default function FieldHeader({
  inputId,
  labelText,
  errorId,
  errorMessage,
}: FieldHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <FieldLabel inputId={inputId} labelText={labelText} />

      <FieldErrorMessage errorId={errorId} errorMessage={errorMessage} />
    </div>
  );
}
