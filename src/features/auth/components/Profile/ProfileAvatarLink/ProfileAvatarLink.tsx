import { useAuth } from "@/contexts/AuthContext/useAuth";
import AppLink from "@/components/ui/Links/AppLink/AppLink";
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
  const { authUser } = useAuth();

  const linkRoute = getUserProfileRoute(authUser);
  const linkLabel = getUserProfileAriaLabel(t, authUser);

  return (
    <AppLink styles="theme-transition" to={linkRoute} ariaLabel={linkLabel}>
      <ProfileAvatar />
    </AppLink>
  );
}
