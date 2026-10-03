import { useTranslation } from "react-i18next";
import { FaUserCircle } from "@/assets/icons/icon";
import Card from "@/components/shared/Card/Card";
import DesktopProfileLink from "./DesktopProfileLink/DesktopProfileLink";

/**
 * Renders the user's profile menu links for desktop viewports with:
 * - Account Link
 * - TO DO: Add links for categories: Preferences, Activity, Data
 */
export default function DesktopProfileMenu() {
  // Translation
  const { t } = useTranslation();

  const listItemStyles = `rounded-xl hover:bg-slate-200 hover:dark:bg-slate-800`;

  const linkStyles = `font-bold text-base text-link truncate
                      group-hover:text-link-hover 
                      sm:inline-block sm:max-w-25 md:text-base`;

  return (
    <Card styles="py-8 w-62.5">
      <ul className="flex flex-col justify-center gap-4 px-4">
        {/*Account link*/}
        <li className={listItemStyles}>
          <DesktopProfileLink to="/profile/account">
            <div
              className="flex justify-center items-center gap-2
            focus-visible:focus-ring focus-visible:outline-offset-2"
            >
              <FaUserCircle
                className="text-2xl text-brand"
                aria-hidden="true"
              />
              <span className={linkStyles}>
                {t("user-profile.links.account")}
              </span>
            </div>
          </DesktopProfileLink>
        </li>
      </ul>
    </Card>
  );
}
