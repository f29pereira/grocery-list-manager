import type { InitialsAvatarColor } from "../../../types/auth.types";

/**
 * Returns the light and dark theme initials avatar styles for a given background color
 */
export const getInitialsAvatarStyles = (
  backgroundColor: InitialsAvatarColor = "green",
): string => {
  const greenStyles =
    "bg-green-900 dark:bg-green-500 text-white group-hover:bg-green-800 dark:group-hover:bg-green-400";
  const redStyles =
    "bg-red-900 dark:bg-red-800 text-white group-hover:bg-red-800 dark:group-hover:bg-red-700";
  const blueStyles =
    "bg-blue-700 dark:bg-blue-800 text-white group-hover:bg-blue-600 dark:group-hover:bg-blue-700";
  const orangeStyles =
    "bg-orange-800 dark:bg-orange-600 text-white group-hover:bg-orange-600 dark:group-hover:bg-orange-500";
  const yellowStyles =
    "bg-yellow-600 dark:bg-yellow-500 text-white group-hover:bg-yellow-500 dark:group-hover:bg-yellow-400";
  const purpleStyles =
    "bg-purple-900 dark:bg-purple-800 text-white group-hover:bg-purple-800 dark:group-hover:bg-purple-700";

  switch (backgroundColor) {
    case "red":
      return redStyles;
    case "green":
      return greenStyles;
    case "blue":
      return blueStyles;
    case "orange":
      return orangeStyles;
    case "yellow":
      return yellowStyles;
    case "purple":
      return purpleStyles;
    default:
      return greenStyles;
  }
};

/**
 * Returns the user's initial in uppercase
 * @param userName user name
 */
export const getUserInitial = (userName: string = "") => {
  const initial = userName.trim().charAt(0);

  return `${initial}`.toUpperCase();
};
