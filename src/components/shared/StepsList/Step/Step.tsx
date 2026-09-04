import type { StepProps } from "./Step.types";
import { IoMdCheckmark } from "@/assets/icons/icon";
import clsx from "clsx";
import { getStepNumberIcon } from "./Step.utils";
import { useTranslation } from "react-i18next";

/**
 * Renders a step
 *
 * Displays:
 * - step number on viewports < 1024px
 * - step number and description on viewports >= 1024px
 * - Checkmark icon if the step is completed
 *
 * Props are defined in {@link StepProps}.
 */
export default function Step({
  isSelected,
  isCompleted,
  number,
  description,
}: StepProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 items-center">
      <div
        className={clsx(
          "flex justify-center items-center w-8 h-8",
          "rounded-full",
          "dark:border-2 dark:border-white",
          "theme-transition",
          "lg:w-10 lg:h-10",
          isSelected ? "bg-green-500" : "bg-green-600",
        )}
      >
        {!isSelected && isCompleted ? (
          <IoMdCheckmark className="text-2xl text-white" />
        ) : (
          getStepNumberIcon(number)
        )}
      </div>

      {/*Step number and description*/}
      <div className="hidden lg:flex flex-col">
        <span className="mb-2 text-base text-paragraph">
          {t("forms.step").toUpperCase()} {number}
        </span>
        <span
          className="font-bold 
                    text-lg text-paragraph"
        >
          {description}
        </span>
      </div>
    </div>
  );
}
