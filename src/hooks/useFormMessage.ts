import { useState } from "react";
import type { FormMessage } from "@/types/common.types";

/**
 * Custom hook that manages a submit form message state
 * @param message message (default: "")
 * @returns [formMessage, clearMessage, showErrorMessage, showSuccessMessage]
 */
export default function useFormMessage() {
  const emptyMessage: FormMessage = {
    status: "empty",
    message: "",
  };

  const [formMessage, setFormMessage] = useState<FormMessage>(emptyMessage);

  /**
   * Clears the formMessage state
   */
  const clearMessage = () => {
    setFormMessage(emptyMessage);
  };

  /**
   * Adds an error message
   * @param message error message
   */
  const showErrorMessage = (message: string) => {
    setFormMessage({ status: "error", message: message });
  };

  /**
   * Adds a success message
   * @param message success message
   */
  const showSuccessMessage = (message: string) => {
    setFormMessage({ status: "success", message: message });
  };

  return [
    formMessage,
    clearMessage,
    showErrorMessage,
    showSuccessMessage,
  ] as const;
}
