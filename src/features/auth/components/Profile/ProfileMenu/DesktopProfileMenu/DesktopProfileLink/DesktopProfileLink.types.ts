import type { AppNavigationLinkProps } from "@/components/ui/Links/AppNavigationLink/AppNavigationLink.types";

/**
 * Props for the DesktopProfileLink component
 * @property to       - route to navigate to
 * @property children - link content
 */
export type DesktopProfileLinkProps = Pick<
  AppNavigationLinkProps,
  "to" | "children"
>;
