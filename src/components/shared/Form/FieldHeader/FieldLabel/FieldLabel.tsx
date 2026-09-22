import type { FieldLabelProps } from "./FieldLabel.types";

/**
 * Renders a label associated to an input field
 *
 * Props are defined in {@link FieldLabelProps}.
 */
export default function FieldLabel({ inputId, labelText }: FieldLabelProps) {
  return (
    <div className="flex justify-between items-center">
      <label className="text-label" htmlFor={inputId}>
        {labelText}
      </label>
    </div>
  );
}
