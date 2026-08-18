import { FaRegUserCircle } from "@/assets/icons/icon";
import MobileNavToggle from "./MobileNav/MobileNavToggle/MobileNavToggle";
import NavLogo from "./NavLogo/NavLogo";
import DesktopLinksList from "./DesktopLinksList/DesktopLinksList";

/**
 * Renders the app navigation with:
 * - Mobile navigation toggle on viewports < 1024px
 * - Logo
 * - Desktop navigation links on viewports >= 1024px
 * - User profile button
 */
export default function Nav() {
  return (
    <nav
      className="relative px-6 py-5 flex justify-between items-center 
      bg-white
        md:px-8 md:py-7"
      aria-label="Main"
    >
      <MobileNavToggle />

      <div className="flex items-center gap-20">
        <NavLogo />

        <DesktopLinksList />
      </div>

      <button>
        <FaRegUserCircle className="cursor-pointer text-2xl text-green-600 md:hover:text-green-500 md:text-3xl" />
      </button>
    </nav>
  );
}
