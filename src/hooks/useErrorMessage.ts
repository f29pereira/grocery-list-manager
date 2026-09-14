import { useState } from "react";

/**
 * Custom hook that manages an error message
 * @param message error message (default: "")
 * @returns errorMessage state, setErrorMessage state setter function and clearErrorMessage function
 */
export default function useErrorMessage(message = "") {
  const [errorMessage, setErrorMessage] = useState(message);

  /**
   * Clears the error message state
   */
  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  return { errorMessage, setErrorMessage, clearErrorMessage };
}
