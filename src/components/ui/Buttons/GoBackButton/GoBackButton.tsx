import clsx from "clsx";
import { useTranslation } from "react-i18next";
import type { GoBackButtonProps } from "./GoBackButton.types";
import { useNavigate } from "react-router";
import PillButton from "../PillButton/PillButton";
import { RiArrowGoBackFill } from "@/assets/icons/icon";

/**
 * Renders a pill button that redirects the user to the previous route
 *
 * Props are defined in {@link GoBackButtonProps}.
 */
export default function GoBackButton({ styles }: GoBackButtonProps) {
  // Translation
  const { t } = useTranslation();

  // React Router
  const navigate = useNavigate();

  return (
    <PillButton
      styles={clsx("theme-transition", styles)}
      handleClick={() => navigate(-1)}
    >
      <div className="flex justify-center items-center gap-4">
        <RiArrowGoBackFill
          className="text-2xl md:text-3xl"
          aria-hidden="true"
        />
        <span className="font-bold text-base">
          {t("ui.buttons.go-back-btn")}
        </span>
      </div>
    </PillButton>
  );
}
