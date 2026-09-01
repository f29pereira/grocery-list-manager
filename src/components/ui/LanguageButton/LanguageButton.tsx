import { useLanguage } from "@/contexts/LanguageContext/useLanguage";
import useToggle from "@/hooks/useToggle";
import {
  FaGlobe,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "@/assets/icons/icon";

/**
 * Renders a button with the current app language and when clicked displays the languages list pop-up
 *
 * Displays:
 * - the icon MdKeyboardArrowUp on viewports < 1024px
 * - the icon MdKeyboardArrowDown on viewports >= 1024px
 */
export default function LanguageButton() {
  // Context
  const { locale } = useLanguage();

  // Custom Hook
  const { isToggled, toggle } = useToggle(false);

  return (
    <div
      className="relative z-10 h-13
                lg:h-9.5 lg:w-32.75"
    >
      {/*Current app language button*/}
      <button
        className="w-full h-full px-2
            text-slate-500 dark:text-white
            border-2 border-solid border-slate-500 dark:border-white 
            rounded-full cursor-pointer
            outline-none
            focus-visible:focus-ring focus-visible:outline-offset-2
            theme-transition
            hover:text-slate-400 hover:dark:text-slate-300"
        onClick={toggle}
      >
        <div className="flex justify-between items-center gap-4 px-2">
          <FaGlobe className="text-2xl lg:text-xl" aria-hidden="true" />

          <span className="font-bold text-base">{locale.toUpperCase()}</span>

          {/*Viewports < 1024px*/}
          <div className="lg:hidden">
            <MdKeyboardArrowUp
              className="text-2xl lg:text-xl"
              aria-hidden="true"
            />
          </div>

          {/*Viewports >= 1024px*/}
          <div className="hidden lg:inline-block">
            <MdKeyboardArrowDown className="text-2xl" aria-hidden="true" />
          </div>
        </div>
      </button>

      {/*Language selector*/}
      {isToggled ? (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 
                    lg:top-full lg:bottom-0"
        >
          {/*TO DO: Add LanguageList component*/}
        </div>
      ) : null}
    </div>
  );
}
