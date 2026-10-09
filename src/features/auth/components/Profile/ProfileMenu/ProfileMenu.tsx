import MobileProfileMenu from "./MobileProfileMenu/MobileProfileMenu";
import DesktopProfileMenu from "./DesktopProfileMenu/DesktopProfileMenu";

/**
 * Renders the user's profile for mobile or desktop viewports with:
 * - Account link
 */
export default function ProfileMenu() {
  return (
    <>
      <div className="xl:hidden">
        <MobileProfileMenu />
      </div>

      <div className="hidden xl:block">
        <DesktopProfileMenu />
      </div>
    </>
  );
}
