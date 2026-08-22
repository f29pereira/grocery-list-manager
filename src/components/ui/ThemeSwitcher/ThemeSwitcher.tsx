import { useTheme } from "@/contexts/ThemeContext/useTheme";
import clsx from "clsx";
import { LuMonitor, LuSun, LuMoon } from "@/assets/icons/icon";
import type { Theme } from "@/contexts/ThemeContext/ThemeContext/ThemeContext.type";

/**
 * Renders an app theme switch that allows users to select:
 * - System theme
 * - Light theme
 * - Dark theme
 */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  /**
   * Returns true if the button matches the current app theme
   * @param btnTheme associated theme
   */
  const isBtnSelected = (btnTheme: Theme) => {
    return theme === btnTheme;
  };

  const btnStyles = `absolute top-0 z-10 flex justify-center items-center w-12.5 h-12.5
                    border-2 border-solid rounded-full cursor-pointer
                    focus-visible:outline-solid focus-visible:outline-[3.2px] 
                    focus-visible:outline-focus focus-visible:dark:outline-focus
                    theme-transition
                    lg:w-9 lg:h-9`;

  const btnSelectedStyles = `text-brand dark:text-brand
                            border-slate-500 dark:border-white
                            bg-slate-100 dark:bg-slate-600`;

  const btnNotSelectedStyles = `text-slate-500 dark:text-white 
                              border-transparent hover:text-slate-400 hover:dark:text-slate-300`;

  return (
    <div
      className="relative flex w-37.5 h-13
                border-2 border-solid border-slate-500 dark:border-white rounded-full
                lg:w-30 lg:h-9.5"
    >
      <p className="sr-only">Select a theme:</p>

      {/*System button*/}
      <button
        className={clsx(
          btnStyles,
          "-left-0.75",
          isBtnSelected("system") ? btnSelectedStyles : btnNotSelectedStyles,
        )}
        onClick={() => setTheme("system")}
        aria-label="System"
      >
        <LuMonitor className="text-2xl lg:text-xl" aria-hidden="true" />
      </button>

      {/*Light button*/}
      <button
        className={clsx(
          btnStyles,
          "left-12.25 lg:left-10.5",
          isBtnSelected("light") ? btnSelectedStyles : btnNotSelectedStyles,
        )}
        onClick={() => setTheme("light")}
        aria-label="Light"
      >
        <LuSun className="text-2xl lg:text-xl" aria-hidden="true" />
      </button>

      {/*Dark button*/}
      <button
        className={clsx(
          btnStyles,
          "-right-0.75",
          isBtnSelected("dark") ? btnSelectedStyles : btnNotSelectedStyles,
        )}
        onClick={() => setTheme("dark")}
        aria-label="Dark"
      >
        <LuMoon className="text-2xl lg:text-xl" aria-hidden="true" />
      </button>
    </div>
  );
}
