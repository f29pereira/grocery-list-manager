import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import Logo from "@/components/shared/Logo/Logo";

/**
 * Renders the app logo as a navigation link
 */
export default function LogoHomeLink() {
  return (
    <NavigationLink
      styles="inline-block
            font-space-grotesk font-black 
            text-brand 
            hover:text-brand-hover 
            theme-transition"
      to="/"
    >
      <Logo />
    </NavigationLink>
  );
}
