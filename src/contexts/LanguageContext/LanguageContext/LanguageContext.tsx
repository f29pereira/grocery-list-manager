import { createContext } from "react";
import type { LanguageContextType } from "./LanguageContext.type";

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
