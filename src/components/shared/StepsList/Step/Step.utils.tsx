import {
  Fa1,
  Fa2,
  Fa3,
  Fa4,
  Fa5,
  Fa6,
  Fa7,
  Fa8,
  Fa9,
} from "@/assets/icons/icon";

/**
 * Returns the step number icon by a given number
 * @param stepNumber step number (1 to 9)
 * @example getStepNumberIcon(1)
 * // <Fa1 className="text-base text-white lg:text-xl"/>
 */
export const getStepNumberIcon = (stepNumber: number) => {
  if (stepNumber < 0 && stepNumber > 9) {
    return null;
  }

  const iconsList = [Fa1, Fa2, Fa3, Fa4, Fa5, Fa6, Fa7, Fa8, Fa9];

  const Icon = iconsList[stepNumber - 1];

  if (!Icon) {
    return null;
  }

  return <Icon className="text-base text-white lg:text-xl" />;
};
