import { Outlet } from "react-router";

/**
 * Renders the route content for the "sign-up", "sign-in" and "password-reset" routes
 */
export default function AuthLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}
