import type { ReactNode } from "react";
import { SUPPORTED_LANGUAGES } from "@/constants/app.constants";

/**
 * Type for React children
 * @property children  - single or list of React children
 */
export type ReactChildrenType = {
  children: ReactNode;
};

/**
 * Type for the supported app languages
 */
export type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];

/**
 * Type for the form submission message
 * @property status  - message status
 * @property message - message text
 */
export type FormMessage = {
  status: "empty" | "error" | "success";
  message: string;
};
