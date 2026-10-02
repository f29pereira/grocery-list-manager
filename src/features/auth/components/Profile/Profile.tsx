import { useAuth } from "@/contexts/AuthContext/useAuth";
import ProfileToggleButton from "./ProfileToggleButton/ProfileToggleButton";
import AppLink from "@/components/ui/Links/AppLink/AppLink";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";

/**
 * Renders the user's profile
 *
 * Displays:
 * - User's profile toggle button: if the user is authenticated
 *
 * Or
 *
 * - Link that redirects to the "sign-in" route: if the user isn't authenticated
 */
export default function Profile() {
  // Context
  const { authUser } = useAuth();

  return (
    <>
      {authUser?.user ? (
        <ProfileToggleButton />
      ) : (
        <div className="min-w-17.5 md:min-w-22.75 lg:min-w-51.75">
          <div className="w-8.75 h-8.75 ml-auto">
            <AppLink styles="inline-block" to="sign-in">
              <ProfileAvatar />
            </AppLink>
          </div>
        </div>
      )}
    </>
  );
}
