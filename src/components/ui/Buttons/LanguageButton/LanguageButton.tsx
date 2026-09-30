import { useLanguage } from "@/contexts/LanguageContext/useLanguage";
import useToggle from "@/hooks/useToggle";
import clsx from "clsx";
import { FaGlobe } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";
import { getLocaleName } from "./LanguageList/LanguageList.utils";
import LanguageList from "./LanguageList/LanguageList";
import ArrowIcon from "../../Icons/ArrowIcon/ArrowIcon";

/**
 * Renders a button with the current app language and when clicked displays the languages list pop-up
 *
 * The button arrow icon features a rotation animation and the languages list features a opacity animation
 */
export default function LanguageButton() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { locale } = useLanguage();

  // Custom Hook
  const [isListVisible, toggleIsListVisible] = useToggle(false); // LanguageList toggle
  const [isIconAnimating, toggleIsIconAnimating] = useToggle(false); // ArrowIcon animation

  /**
   * Toggles the arrow icon animation and languages list pop-up
   */
  const handleClick = () => {
    toggleIsIconAnimating();
    toggleIsListVisible();
  };

  return (
    <div
      className="relative h-13 w-37.5
                lg:h-9.5"
    >
      {/*Current app language button*/}
      <button
        className="relative z-10 w-full h-full px-2
                border-2 border-solid border-slate-500 dark:border-white 
                rounded-full outline-none cursor-pointer
              bg-nav-footer-bg
              text-slate-500 dark:text-white
                focus-visible:focus-ring focus-visible:outline-offset-2
                theme-transition
              hover:text-slate-400 hover:dark:text-slate-300"
        onClick={handleClick}
        aria-label={`${t("languageButton.label")} ${getLocaleName(locale)}`}
      >
        <div
          className="flex justify-between items-center gap-4 px-2
                    "
        >
          <FaGlobe className="text-2xl lg:text-xl" aria-hidden="true" />

          <span className="font-bold text-base tracking-widest">
            {locale.toUpperCase()}
          </span>

          <ArrowIcon
            styles="text-xl"
            isAnimating={isIconAnimating}
            pointingDirection="down"
          />
        </div>
      </button>

      {/*Languages list pop-up*/}
      {isListVisible ? (
        <div
          className={clsx(
            "absolute bottom-11.25 left-1/2 -translate-x-1/2",
            "transition-discrete transition-opacity duration-300 ease-out",
            "starting:opacity-0 motion-reduce:transition-none",
            "lg:bottom-7.5",
            isListVisible ? "opacity-100" : "opacity-0",
          )}
        >
          <LanguageList close={handleClick} />
        </div>
      ) : null}
    </div>
  );
}
