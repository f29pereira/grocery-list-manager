import ProfileMenu from "@/features/auth/components/ProfileManager/Profile/ProfileMenu/ProfileMenu";
import { Outlet } from "react-router";

/**
 * Renders the profile menu and the current user's profile related route content
 */
export default function ProfileLayout() {
  return (
    <>
      <ProfileMenu />

      <div className="mt-8">
        <Outlet />
      </div>
    </>
  );
}
