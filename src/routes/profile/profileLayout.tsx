import ProfileMenu from "@/features/auth/components/Profile/ProfileMenu/ProfileMenu";
import { Outlet } from "react-router";

/**
 * Renders the profile menu and the current user's profile related route content
 */
export default function ProfileLayout() {
  return (
    <div className="xl:flex xl:justify-center xl:gap-8">
      <ProfileMenu />

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
