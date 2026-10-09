import { createBrowserRouter, redirect } from "react-router";
import Root from "./routes/root";
import RootErrorBoundary from "./routes/rootErrorBoundary";
import AuthLayout from "./routes/auth/authLayout";
import ProtectedLayout from "./routes/protectedLayout";
import SignInRoute from "./routes/auth/signIn";
import SignUpRoute from "./routes/auth/signUp";
import ForgotPasswordRoute from "./routes/auth/passwordReset";
import ProfileManager from "./routes/profile/profileManager";
import AccountRoute from "./routes/profile/account";

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
              { index: true, loader: () => redirect("account") },
              { path: "account", Component: AccountRoute },
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
