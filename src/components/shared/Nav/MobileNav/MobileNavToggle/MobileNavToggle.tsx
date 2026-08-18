import useToggle from "@/hooks/useToggle";
import { RxHamburgerMenu } from "@/assets/icons/icon";
import MobileNav from "../MobileNav";

/**
 * Renders a hamburger button or dialog (MobileNav component) on viewports < 1024px
 */
export default function MobileNavToggle() {
  const { isToggled, toggle, setIsToggled } = useToggle(false);

  return (
    <div className="lg:hidden">
      <button
        className="flex items-center
                  cursor-pointer rounded-sm text-green-600
                  focus-visible:outline-solid focus-visible:outline-[3.2px] focus-visible:outline-offset-2
                focus-visible:outline-blue-500 focus-visible:bg-blue-50
                  transition-[color] delay-150 duration-300 ease-in-out 
                  motion-reduce:transition-none 
                hover:text-green-500"
        onClick={toggle}
        aria-label="Mobile navigation"
        aria-expanded={isToggled}
      >
        <RxHamburgerMenu className="text-2xl md:text-3xl" aria-hidden="true" />
      </button>

      <MobileNav isToggled={isToggled} setToggle={setIsToggled} />
    </div>
  );
}
