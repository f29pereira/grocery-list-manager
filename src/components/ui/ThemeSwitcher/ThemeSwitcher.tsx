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

  const btnStyles = `flex justify-center items-center w-12.5 h-12.5
                    border-2 border-solid rounded-full cursor-pointer
                    focus-visible:outline-solid focus-visible:outline-[3.2px] 
                    focus-visible:outline-offset-1 focus-visible:outline-blue-500
                    transition-[color,background-color] delay-150 duration-300 ease-in-out
                    motion-reduce:transition-none`;

  const btnSelectedStyles = `text-green-600 border-slate-500 bg-slate-100`;

  const btnNotSelectedStyles = `text-slate-500 border-transparent hover:text-slate-400`;

  return (
    <div
      className="flex justify-between items-center w-37.5 h-12.5
                border-[1.7px] border-solid border-slate-500 rounded-full"
    >
      <p className="sr-only">Select a theme:</p>

      {/*System button*/}
      <button
        className={clsx(
          btnStyles,
          isBtnSelected("system") ? btnSelectedStyles : btnNotSelectedStyles,
        )}
        onClick={() => setTheme("system")}
        aria-label="System"
      >
        <LuMonitor className="text-2xl" aria-hidden="true" />
      </button>

      {/*Light button*/}
      <button
        className={clsx(
          btnStyles,
          isBtnSelected("light") ? btnSelectedStyles : btnNotSelectedStyles,
        )}
        onClick={() => setTheme("light")}
        aria-label="Light"
      >
        <LuSun className="text-2xl" aria-hidden="true" />
      </button>

      {/*Dark button*/}
      <button
        className={clsx(
          btnStyles,
          isBtnSelected("dark") ? btnSelectedStyles : btnNotSelectedStyles,
        )}
        onClick={() => setTheme("dark")}
        aria-label="Dark"
      >
        <LuMoon className="text-2xl" aria-hidden="true" />
      </button>
    </div>
  );
}
