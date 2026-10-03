import type { AppNavigationLinkProps } from "@/components/ui/Links/AppNavigationLink/AppNavigationLink.types";

/**
 * Props for the MobileProfileLink component
 * @property to       - route to navigate to
 * @property children - link content
 */
export type MobileProfileLinkProps = Pick<
  AppNavigationLinkProps,
  "to" | "children"
>;
