import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import { useTranslation } from "react-i18next";

/**
 * Renders the desktop navigation links on viewports >= 1024px:
 * - Home
 *
 * The link features a slide in underline on hover. If the link is active, the underline remains visible.
 */
export default function DesktopLinksList() {
  const { t } = useTranslation();

  const navItemStyles = `relative inline-block
                        text-link
                        after:absolute after:-bottom-[9px] after:left-0
                        after:content-[''] after:w-full after:h-0.75
                        after:bg-brand
                        after:[clip-path:inset(0_100%_0_0)]
                        after:transition-[clip-path]
                        after:duration-[350ms]
                        after:ease-[cubic-bezier(0.65,0,0.35,1)]
                        hover:after:[clip-path:inset(0_0_0_0)]
                        hover:text-link-hover
                        aria-[current=page]:after:[clip-path:inset(0_0_0_0)]
                        motion-reduce:transition-none
                        lg:mr-10`;

  return (
    <ul className="hidden lg:flex">
      <li>
        <NavigationLink styles={navItemStyles} to="/" end={true}>
          {t("home.link")}
        </NavigationLink>
      </li>
      {/*TO DO: Add Links*/}
    </ul>
  );
}
