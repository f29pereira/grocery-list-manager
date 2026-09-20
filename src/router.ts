import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import RootErrorBoundary from "./routes/rootErrorBoundary";
import AuthLayout from "./routes/authLayout";
import SignIn from "./routes/signIn";
import SignUp from "./routes/signUp";
import ForgotPassword from "./routes/passwordReset";

/**
 * Routes configuration
 */
export const router = createBrowserRouter([
  // Authentication routes
  {
    Component: AuthLayout,
    children: [
      { path: "signup", Component: SignUp },
      { path: "signin", Component: SignIn },
      { path: "password-reset", Component: ForgotPassword },
    ],
  },

  // Root
  {
    path: "/",
    Component: Root,
    children: [
      // TO DO: Add "home" route
      // Protected routes
      // TO DO: Add protected routes
    ],
  },

  // Page Not Found
  { path: "*", Component: RootErrorBoundary },
]);
