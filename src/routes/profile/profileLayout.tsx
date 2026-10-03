import ProfileMenu from "@/features/auth/components/Profile/ProfileMenu/ProfileMenu";
import { Outlet } from "react-router";

/**
 * Renders the profile menu and the current user's profile related route content
 */
export default function ProfileLayout() {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:gap-4">
      <ProfileMenu />

      <div className="mt-8 lg:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
