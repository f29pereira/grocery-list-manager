/**
 * Type for the user authentication fields
 * @property email    - email field
 * @property password - password field
 */
export type AuthenticationFields = {
  email: string;
  password: string;
};

/**
 * Type for the user detail fields
 * @property firstName - first name
 * @property lastName  - last name
 */
export type UserDetailsFields = {
  firstName: string;
  lastName: string;
};

/**
 * Type for the Initials Avatar background color
 */
export type InitialsAvatarColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "purple";
