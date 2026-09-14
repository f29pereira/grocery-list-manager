import type { TFunction } from "i18next";

/**
 * Returns the sign up forms descriptions
 * @param t steps translation
 */
export const getStepsDescription = (
  t: TFunction<"translation", undefined>,
): string[] => {
  // TO DO: Add next steps descriptions
  return [
    t("forms.signUp.auth-step.step"),
    t("forms.signUp.email-verification-step.step"),
  ];
};
