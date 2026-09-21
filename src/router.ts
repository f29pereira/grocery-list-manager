import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import RootErrorBoundary from "./routes/rootErrorBoundary";
import AuthLayout from "./routes/authLayout";
import SignInRoute from "./routes/signIn";
import SignUp from "./routes/signUp";
import ForgotPasswordRoute from "./routes/passwordReset";

/**
 * Routes configuration
 */
export const router = createBrowserRouter([
  // Authentication routes
  {
    Component: AuthLayout,
    children: [
      { path: "sign-up", Component: SignUp },
      { path: "sign-in", Component: SignInRoute },
      { path: "password-reset", Component: ForgotPasswordRoute },
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
