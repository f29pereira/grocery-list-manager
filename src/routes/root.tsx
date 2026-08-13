import { Outlet } from "react-router";
import Nav from "../components/shared/Nav/Nav";
import Footer from "../components/shared/Footer/Footer";

/**
 * Renders the Nav component, current route content and Footer component
 */
export default function Root() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
