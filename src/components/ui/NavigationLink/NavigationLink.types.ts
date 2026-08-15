/**
 * Props for the NavigationLink component
 * @property styles         - (optional) tailwind css classes
 * @property to             - route to navigate to
 * @property text           - link text
 * @property handleOnClick  - (optional) on click function
 */
export type NavigationLinkProps = {
  styles?: string;
  to: string;
  handleOnClick?: () => void;
  text: string;
};
