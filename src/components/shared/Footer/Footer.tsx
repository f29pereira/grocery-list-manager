import FooterLogo from "./FooterLogo/FooterLogo";
import FooterNav from "./FooterNav/FooterNav";
import FooterCredit from "./FooterCredit/FooterCredit";

/**
 * Renders the app footer with:
 * - Logo
 * - Links: Company, Legal, Support and Social
 * - Footer credit
 */
export default function Footer() {
  return (
    <footer
      className="bg-white py-12
                lg:px-10 lg:py-20
                xl:px-32"
    >
      <div className="lg:flex lg:justify-between">
        <FooterLogo />

        <FooterNav />
      </div>

      <FooterCredit />
    </footer>
  );
}
