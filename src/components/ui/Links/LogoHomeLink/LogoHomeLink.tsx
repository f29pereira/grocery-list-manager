import AppLink from "../AppLink/AppLink";
import Logo from "@/components/shared/Logo/Logo";

/**
 * Renders the app logo as a navigation link
 */
export default function LogoHomeLink() {
  return (
    <AppLink
      styles="inline-block
            text-brand 
            hover:text-brand-hover 
            theme-transition"
      to="/"
    >
      <Logo />
    </AppLink>
  );
}
