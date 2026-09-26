import { useTranslation } from "react-i18next";
import type { MobileLinksListProps } from "./MobileLinksList.type";
import AppLink from "@/components/ui/Links/AppLink/AppLink";

/**
 * Renders the mobile navigation links:
 * - Home
 *
 * Props are defined in {@link MobileLinksListProps}.
 */
export default function MobileLinksList({
  handleOnClick,
}: MobileLinksListProps) {
  const { t } = useTranslation();

  const navItemStyles = `relative inline-block
                      font-bold text-link
                      hover:text-link-hover
                      theme-transition
                      lg:mr-10`;

  return (
    <ul className="ml-2 flex flex-col gap-9">
      <li>
        <AppLink styles={navItemStyles} to="/" handleOnClick={handleOnClick}>
          {t("nav.links.home")}
        </AppLink>
      </li>
      {/*TO DO: Add Links*/}
    </ul>
  );
}
