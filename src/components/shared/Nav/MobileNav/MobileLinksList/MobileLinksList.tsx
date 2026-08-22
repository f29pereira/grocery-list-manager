import type { MobileLinksListProps } from "./MobileLinksList.type";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the mobile navigation links:
 * - Home
 *
 * Props are defined in {@link MobileLinksListProps}.
 */
export default function MobileLinksList({
  handleOnClick,
}: MobileLinksListProps) {
  const navItemStyles = `relative inline-block
                        font-bold text-link
                        hover:text-link-hover
                        theme-transition
                        lg:mr-10`;

  return (
    <ul className="ml-2 flex flex-col gap-9">
      <li>
        <NavigationLink
          styles={navItemStyles}
          to="/"
          end={true}
          handleOnClick={handleOnClick}
        >
          Home
        </NavigationLink>
      </li>
      {/*TO DO: Add Links*/}
    </ul>
  );
}
