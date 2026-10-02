import { useTranslation } from "react-i18next";
import AppNavigationLink from "@/components/ui/Links/AppNavigationLink/AppNavigationLink";
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
        <AppNavigationLink
          styles="text-brand hover:text-brand-hover"
          activeStyles="text-brand-hover"
          to="/profile/account"
          ariaLabel={t("user-profile.links.account")}
        >
          <FaUserCircle className="text-3xl" aria-hidden />
        </AppNavigationLink>
      </li>
      {/*TO DO: Add links for categories: Preferences, Activity, Data*/}
    </ul>
  );
}
