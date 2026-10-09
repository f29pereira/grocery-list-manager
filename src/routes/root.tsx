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

      <main
        className="flex-1 px-4 py-12
                  sm:px-6 sm:py-14 md:px-8 md:py-16
                  xl:px-16 xl:py-32 2xl:py-40"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
