import { useTranslation } from "react-i18next";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNav from "./FooterNav/FooterNav";
import Credits from "../Credits/Credits";
import LanguageButton from "@/components/ui/Buttons/LanguageButton/LanguageButton";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";

/**
 * Renders the app footer with:
 * - Logo
 * - Links: Company, Legal, Support and Social
 * - Locale and Theme buttons
 * - App credits
 */
export default function Footer() {
  // Translation
  const { t } = useTranslation();

  return (
    <footer
      className="py-12
              bg-nav-footer-bg
                theme-transition
                lg:px-10 lg:pt-20
                xl:px-30"
    >
      <div className="lg:flex lg:justify-between">
        <FooterLogo />

        <FooterNav />
      </div>

      <div className="mt-20 lg:mt-40">
        <div
          className="flex flex-col items-center gap-8 
                  lg:flex-row lg:justify-between"
        >
          <LanguageButton />
          <ThemeSwitcher />
        </div>

        <div className="mt-20">
          {/*Screen reader only credits title*/}
          <h4 className="sr-only">{t("credits.title")}</h4>
          <Credits />
        </div>
      </div>
    </footer>
  );
}
