import useToggle from "@/hooks/useToggle";
import { RxHamburgerMenu } from "@/assets/icons/icon";
import MobileNav from "../MobileNav";
import clsx from "clsx";

/**
 * Renders a hamburger button or dialog (MobileNav component)
 */
export default function MobileNavToggle() {
  const { isToggled, toggle, setIsToggled } = useToggle(false);

  return (
    <>
      <button
        className={clsx(
          "flex items-center",
          "cursor-pointer text-green-600",
          "focus-visible:outline-solid focus-visible:outline-[3.2px] focus-visible:outline-offset-4 focus-visible:outline-green-900",
          "transition-[color] delay-150 duration-300 ease-in-out motion-reduce:transition-none md:hover:text-green-500",
        )}
        onClick={toggle}
        aria-label="Mobile navigation"
        aria-expanded={isToggled}
      >
        <RxHamburgerMenu className="text-2xl " aria-hidden="true" />
      </button>

      <MobileNav isToggled={isToggled} setToggle={setIsToggled} />
    </>
  );
}
