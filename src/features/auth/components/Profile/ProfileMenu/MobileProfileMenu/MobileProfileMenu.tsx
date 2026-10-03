import { useTranslation } from "react-i18next";
import { FaUserCircle } from "@/assets/icons/icon";
import AppNavigationLink from "@/components/ui/Links/AppNavigationLink/AppNavigationLink";

/**
 * Renders the user's profile menu links for mobile viewports with:
 * - Account Link
 * - TO DO: Add links for categories: Preferences, Activity, Data
 */
export default function MobileProfileMenu() {
  // Translation
  const { t } = useTranslation();

  const activeStyles = `after:absolute after:-bottom-[9px] after:left-0 
                      after:content-[''] after:w-full after:h-0.75 after:bg-brand`;

  const linkStyles = `max-w-10 font-bold text-xs text-link truncate
                      group-hover:text-link-hover 
                      sm:max-w-25 sm:text-sm md:text-base`;

  return (
    <ul className="flex justify-between items-center gap-4 pb-3 overflow-hidden">
      <li>
        {/*Account link*/}
        <AppNavigationLink
          styles="relative group"
          activeStyles={activeStyles}
          to="/profile/account"
        >
          <div className="flex justify-center items-center gap-2">
            <FaUserCircle className="text-2xl text-brand" aria-hidden="true" />
            <span className={linkStyles}>
              {t("user-profile.links.account")}
            </span>
          </div>
        </AppNavigationLink>
      </li>

      {/*TO DO: Add links for categories: Preferences, Activity, Data*/}
    </ul>
  );
}
