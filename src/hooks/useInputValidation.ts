import type { FieldValues, FieldErrors, Path } from "react-hook-form";

/**
 * Custom hook for the React Hook Form field validation and error message
 * @param errors
 * @returns isInputInvalid and getInputErrorMessage functions
 */
export default function useInputValidation<T extends FieldValues>(
  errors: FieldErrors<T>,
) {
  /**
   * Returns true if a given input has an associated error
   * @param input input field
   */
  const isInputInvalid = (input: Path<T>) => {
    return errors[input] !== undefined;
  };

  /**
   * Returns the error message of a given input
   * @param input input field
   */
  const getInputErrorMessage = (input: Path<T>) => {
    return errors[input]?.message as string | undefined;
  };

  return { isInputInvalid, getInputErrorMessage };
}
