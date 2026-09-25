import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNav from "./FooterNav/FooterNav";
import Credits from "../Credits/Credits";

/**
 * Renders the app footer with:
 * - Logo
 * - Links: Company, Legal, Support and Social
 * - App credits
 */
export default function Footer() {
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

      <Credits />
    </footer>
  );
}
