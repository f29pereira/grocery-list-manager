import { useTranslation } from "react-i18next";
import { FaUserCircle } from "@/assets/icons/icon";
import MobileProfileLink from "./MobileProfileLink/MobileProfileLink";

/**
 * Renders the user's profile menu links for mobile viewports with:
 * - Account Link
 * - TO DO: Add links for categories: Preferences, Activity, Data
 */
export default function MobileProfileMenu() {
  // Translation
  const { t } = useTranslation();

  const iconStyles = `text-3xl text-brand sm:text-2xl`;

  const linkStyles = `hidden font-bold text-sm text-link truncate
                      group-hover:text-link-hover 
                      sm:inline-block sm:max-w-25 md:text-base`;

  return (
    <ul className="flex justify-between items-center gap-4 px-2 py-3 overflow-hidden">
      <li>
        {/*Account link*/}
        <MobileProfileLink to="/profile/account">
          <div className="flex justify-center items-center gap-2">
            <FaUserCircle className={iconStyles} aria-hidden="true" />
            <span className={linkStyles}>
              {t("user-profile.links.account")}
            </span>
          </div>
        </MobileProfileLink>
      </li>

      {/*TO DO: Add links for categories: Preferences, Activity, Data*/}
    </ul>
  );
}
