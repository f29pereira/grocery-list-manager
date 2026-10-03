import MobileProfileMenu from "./MobileProfileMenu/MobileProfileMenu";
import DesktopProfileMenu from "./DesktopProfileMenu/DesktopProfileMenu";

/**
 * Renders the user's profile for mobile or desktop viewports
 */
export default function ProfileMenu() {
  return (
    <>
      <div className="lg:hidden">
        <MobileProfileMenu />
      </div>

      <div className="hidden lg:block">
        <DesktopProfileMenu />
      </div>
    </>
  );
}
