import { Outlet } from "react-router";

/**
 * Renders the route content
 */
export default function AuthLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}
