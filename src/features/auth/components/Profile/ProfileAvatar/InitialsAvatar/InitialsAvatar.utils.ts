/**
 * Returns the user's first initials in uppercase.
 */
export const getUserInitial = (userName: string = "") => {
  const initial = userName.trim().charAt(0);

  return `${initial}`.toUpperCase();
};
