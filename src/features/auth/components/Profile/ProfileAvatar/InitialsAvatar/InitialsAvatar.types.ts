/**
 * Props for the InitialsAvatar component
 * @property styles           - (optional) Tailwind CSS classes for the initials container
 * @property fontStyles       - (optional) Tailwind CSS classes for the initials text
 * @property firstNameInitial - user's first name initial
 * @property lastNameInitial  - user's last name initial
 */
export type InitialsAvatarProps = {
  styles?: string;
  fontStyles?: string;
  firstNameInitial: string;
  lastNameInitial: string;
};
