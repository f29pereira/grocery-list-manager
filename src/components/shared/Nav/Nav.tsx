import { FaRegUserCircle } from "@/assets/icons/icon";
import MobileNavToggle from "./MobileNav/MobileNavToggle/MobileNavToggle";
import NavLogo from "./NavLogo/NavLogo";
import DesktopLinksList from "./DesktopLinksList/DesktopLinksList";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";

/**
 * Renders the app navigation with:
 * - Mobile navigation toggle on viewports < 1024px
 * - Logo
 * - Desktop navigation links on viewports >= 1024px
 * - Theme switch on on viewports >= 1024px
 * - User profile button
 */
export default function Nav() {
  return (
    <nav
      className="relative flex justify-between items-center px-6 py-5
              bg-nav-footer-bg dark:bg-dark-nav-footer-bg theme-transition
                md:px-8 md:py-7"
      aria-label="Main"
    >
      <MobileNavToggle />

      <div className="flex items-center gap-20">
        <NavLogo />

        <DesktopLinksList />
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>

        <button>
          <FaRegUserCircle
            className="cursor-pointer text-2xl 
                    text-brand dark:text-brand
                    hover:text-brand-hover hover:dark:text-brand-hover
                      md:text-3xl"
          />
        </button>
      </div>
    </nav>
  );
}
