import { useTranslation } from "react-i18next";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import { FaUserCircle } from "@/assets/icons/icon";

/**
 * Renders the user's profile menu with:
 * - Account link
 * - TO DO: Add links for categories: Preferences, Activity, Data
 */
export default function ProfileMenu() {
  // Translation
  const { t } = useTranslation();

  return (
    <ul className="flex justify-center items-center px-4">
      {/*Account link*/}
      <li>
        <NavigationLink
          styles="text-brand hover:text-brand-hover"
          activeStyles="text-brand-hover"
          to="/profile/account"
          ariaLabel={t("nav.links.user-profile.links.acccount")}
        >
          <FaUserCircle className="text-3xl" aria-hidden />
        </NavigationLink>
      </li>
      {/*TO DO: Add links for categories: Preferences, Activity, Data*/}
    </ul>
  );
}
