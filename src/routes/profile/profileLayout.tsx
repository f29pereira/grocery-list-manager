import ProfileMenu from "@/features/auth/components/Profile/ProfileMenu/ProfileMenu";
import { Outlet } from "react-router";

/**
 * Renders the profile menu and the current user's profile related route content
 */
export default function ProfileLayout() {
  return (
    <div className="xl:flex xl:justify-center xl:gap-8">
      <ProfileMenu />

      <div
        className="flex flex-col gap-8 mt-8
                  lg:flex-row lg:justify-center lg:gap-16
                  xl:mt-0 xl:flex-1 xl:flex-row xl:justify-start"
      >
        <Outlet />
      </div>
    </div>
  );
}
