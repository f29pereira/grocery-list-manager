import { Outlet } from "react-router";
import RedirectAuthenticated from "./redirectAuthenticated";

/**
 * Renders the route content for the "sign-up", "sign-in" and "password-reset" routes
 */
export default function AuthLayout() {
  return (
    <RedirectAuthenticated>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </RedirectAuthenticated>
  );
}
