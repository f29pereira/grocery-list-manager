import type { TFunction } from "i18next";
import type { Rule } from "./PasswordRules.types";
import { getPasswordStatus } from "@/features/auth/components/utils/common.utils";

/**
 * Returns the list of password rules with validation
 * @param t        rules translation
 * @param password password field
 *
 * @returns array with the following rules and if valid or invalid:
 * - min-max characters
 * - 1 uppercase character
 * - 1 numeric character
 * - 1 special character
 */
export const getPasswordRulesWithValidation = async (
  t: TFunction<"translation", undefined>,
  password: string,
): Promise<Rule[]> => {
  const [lengthRule, uppercaseRule, numericRule, specialRule] =
    getPasswordRulesText(t);

  const status = await getPasswordStatus(password);

  return [
    {
      description: lengthRule,
      isChecked: true,
      isValid:
        (status.meetsMinPasswordLength && status.meetsMaxPasswordLength) ||
        false,
    },
    {
      description: uppercaseRule,
      isChecked: true,
      isValid: status.containsUppercaseLetter || false,
    },
    {
      description: numericRule,
      isChecked: true,
      isValid: status.containsNumericCharacter || false,
    },
    {
      description: specialRule,
      isChecked: true,
      isValid: status.containsNonAlphanumericCharacter || false,
    },
  ];
};

/**
 * Returns the list of password rules with no validation
 * @param t        rules translation
 *
 * @returns array with the following rules:
 * - min-max characters
 * - 1 uppercase character
 * - 1 numeric character
 * - 1 special character
 */
export const getPasswordRulesNoValidation = (
  t: TFunction<"translation", undefined>,
): Rule[] => {
  const [lengthRule, uppercaseRule, numericRule, specialRule] =
    getPasswordRulesText(t);

  return [
    {
      description: lengthRule,
      isChecked: false,
      isValid: false,
    },
    {
      description: uppercaseRule,
      isChecked: false,
      isValid: false,
    },
    {
      description: numericRule,
      isChecked: false,
      isValid: false,
    },
    {
      description: specialRule,
      isChecked: false,
      isValid: false,
    },
  ];
};

/**
 * Returns the password rules text
 * @param t rules translation
 * @returns array with the following rules:
 * - min-max characters
 * - 1 uppercase character
 * - 1 numeric character
 * - 1 special character
 */
export const getPasswordRulesText = (
  t: TFunction<"translation", undefined>,
): string[] => {
  return [
    t("forms.auth.password.rules.list.length"),
    t("forms.auth.password.rules.list.upperCase"),
    t("forms.auth.password.rules.list.numeric"),
    t("forms.auth.password.rules.list.special"),
  ];
};
