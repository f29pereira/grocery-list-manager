import { AuthContext } from "./AuthContext/AuthContext";
import { useContext } from "react";

/**
 * Custom Hook: allows access to the AuthContext
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
