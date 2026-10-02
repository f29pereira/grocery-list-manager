import { useMultiStep } from "@/contexts/MultiStepContext/useMultiStep";
import { useTranslation } from "react-i18next";
import PillButton from "../../PillButton/PillButton";
import HoverScaleArrowIcon from "@/components/ui/Icons/ArrowIcon/HoverScaleArrowIcon/HoverScaleArrowIcon";

/**
 * Renders a next step button
 *
 * Can be used within a MultiStepProvider
 */
export default function NextStepButton() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { nextStep } = useMultiStep();

  return (
    <PillButton
      styles="bg-button group
              shadow-lg shadow-green-700/50
              hover:bg-button-hover"
      handleClick={nextStep}
    >
      <div className="flex justify-center items-center gap-2">
        <span className="font-bold text-md text-button-label">
          {t("multi-step.next-step")}
        </span>

        <HoverScaleArrowIcon
          styles="text-3xl text-button-label group-hover:scale-125"
          pointingDirection="right"
        />
      </div>
    </PillButton>
  );
}
