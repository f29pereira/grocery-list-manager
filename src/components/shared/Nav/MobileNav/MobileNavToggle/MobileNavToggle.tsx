import useToggle from "@/hooks/useToggle";
import { RxHamburgerMenu } from "@/assets/icons/icon";
import MobileNav from "../MobileNav";
import { useTranslation } from "react-i18next";

/**
 * Renders a hamburger button or dialog (MobileNav component) on viewports < 1024px
 */
export default function MobileNavToggle() {
  // Translation
  const { t } = useTranslation();

  // Custom Hook
  const { isToggled, toggle, setIsToggled } = useToggle(false);

  return (
    <div className="lg:hidden">
      <button
        className="flex items-center
                  cursor-pointer rounded-sm 
                text-brand
                  focus-visible:focus-ring focus-visible:outline-offset-2
                  theme-transition 
                hover:text-brand-hover"
        onClick={toggle}
        aria-label={t("mobile.toggle-btn-label")}
        aria-expanded={isToggled}
      >
        <RxHamburgerMenu className="text-2xl md:text-3xl" aria-hidden="true" />
      </button>

      <MobileNav isToggled={isToggled} setToggle={setIsToggled} />
    </div>
  );
}
