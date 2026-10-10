import { Outlet } from "react-router";
import RedirectAuthenticated from "./redirectAuthenticated";

/**
 * Renders the route content for the "sign-up", "sign-in" and "password-reset" routes
 */
export default function AuthLayout() {
  return (
    <RedirectAuthenticated>
      <main
        className="min-h-screen px-4 py-12
                  sm:px-6 sm:py-14 md:px-8 md:py-16
                  lg:flex lg:justify-center"
      >
        <Outlet />
      </main>
    </RedirectAuthenticated>
  );
}
