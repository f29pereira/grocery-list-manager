import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import RootErrorBoundary from "./routes/rootErrorBoundary";
import AuthLayout from "./routes/auth/authLayout";
import ProtectedLayout from "./routes/protectedLayout";
import SignInRoute from "./routes/auth/signIn";
import SignUpRoute from "./routes/auth/signUp";
import ForgotPasswordRoute from "./routes/auth/passwordReset";
import ProfileManager from "./routes/profile/profileManager";

/**
 * Routes configuration
 */
export const router = createBrowserRouter([
  // Authentication routes
  {
    Component: AuthLayout,
    children: [
      { path: "sign-up", Component: SignUpRoute },
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
      {
        Component: ProtectedLayout,
        children: [
          {
            path: "profile",
            Component: ProfileManager,
            children: [
              // TO DO: /account route
            ],
          },
          // TO DO: Add "/groceries" route
        ],
      },
    ],
  },

  // Page Not Found
  { path: "*", Component: RootErrorBoundary },
]);
