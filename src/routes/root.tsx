import { Outlet } from "react-router";
import Nav from "../components/shared/Nav/Nav";
import Footer from "../components/shared/Footer/Footer";

/**
 * Renders the Nav component, current route content and Footer component
 */
export default function Root() {
  return (
    <>
      <Nav />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
