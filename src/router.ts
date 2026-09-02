import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import RootErrorBoundary from "./routes/rootErrorBoundary";
import SignIn from "./routes/signIn";
import AuthLayout from "./routes/authLayout";

/**
 * Routes configuration
 */
export const router = createBrowserRouter([
  // Authentication routes
  {
    Component: AuthLayout,
    children: [
      { path: "signIn", Component: SignIn } /*TO DO: Add "signup" route*/,
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
