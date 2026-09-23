import { useAuth } from "@/contexts/AuthContext/useAuth";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import {
  getUserProfileAriaLabel,
  getUserProfileRoute,
} from "./ProfileAvatarLink.utils";
import { useTranslation } from "react-i18next";

/**
 * Renders the user profile link
 *
 * If the user isn't authenticated, redirects to the sign in route
 */
export default function ProfileAvatarLink() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser, isProfileComplete } = useAuth();

  const linkRoute = getUserProfileRoute(authUser, isProfileComplete);
  const linkLabel = getUserProfileAriaLabel(t, authUser);

  return (
    <NavigationLink
      styles="theme-transition"
      to={linkRoute}
      ariaLabel={linkLabel}
    >
      <ProfileAvatar />
    </NavigationLink>
  );
}
