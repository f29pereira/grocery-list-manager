import { FaRegUserCircle } from "@/assets/icons/icon";
import MobileNavToggle from "./MobileNav/MobileNavToggle/MobileNavToggle";
import Logo from "../Logo/Logo";
import DesktopLinksList from "./DesktopLinksList/DesktopLinksList";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import LanguageButton from "@/components/ui/LanguageButton/LanguageButton";

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
              bg-nav-footer-bg
                theme-transition
                md:px-8 md:py-7"
      aria-label="Main"
    >
      <MobileNavToggle />

      <div className="flex items-center gap-20">
        <Logo styles="text-brand hover:text-brand-hover" />

        <DesktopLinksList />
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>

        <div className="hidden lg:block">
          <LanguageButton />
        </div>

        {/*TO DO: update to property*/}
        <NavigationLink
          styles="text-2xl text-brand 
                  hover:text-brand-hover 
                  md:text-3xl"
          to="/signin"
        >
          <FaRegUserCircle
            className="text-2xl 
                    text-brand
                    hover:text-brand-hover
                      md:text-3xl"
          />
        </NavigationLink>
      </div>
    </nav>
  );
}
