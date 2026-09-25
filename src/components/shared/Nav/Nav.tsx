import MobileNavToggle from "./MobileNav/MobileNavToggle/MobileNavToggle";
import LogoHomeLink from "@/components/ui/Links/LogoHomeLink/LogoHomeLink";
import DesktopLinksList from "./DesktopLinksList/DesktopLinksList";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";
import LanguageButton from "@/components/ui/LanguageButton/LanguageButton";
import ProfileAvatarLink from "@/features/auth/components/ProfileManager/ProfileAvatarLink/ProfileAvatarLink";
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
        <LogoHomeLink styles="text-brand hover:text-brand-hover" />

        <DesktopLinksList />
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>

        <div className="hidden lg:block">
          <LanguageButton />
        </div>

        <ProfileAvatarLink />
      </div>
    </nav>
  );
}
