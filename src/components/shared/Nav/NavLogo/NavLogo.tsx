import { TbPaperBag } from "@/assets/icons/icon";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the app logo, used by the Nav and PageNotFound components, as a navigation link
 *
 * Displays:
 * - the logo icon and "GM" on viewports < 640px
 * - the logo icon and "Grocery List" viewports >= 640px
 */
export default function NavLogo() {
  return (
    <>
      {/*Viewports < 640px*/}
      <NavigationLink
        styles="inline-block
                text-green-600
                font-space-grotesk font-black
                transition-[color] delay-150 duration-300 ease-in-out 
                motion-reduce:transition-none 
                hover:text-green-500
                sm:hidden"
        to="/"
      >
        <div className="flex justify-center items-center gap-1">
          <TbPaperBag className="text-2xl sm:text-3xl" aria-hidden="true" />
          <span className="sr-only">Grocery List</span>
          <span className="text-2xl tracking-widest" aria-hidden="true">
            GL
          </span>
        </div>
      </NavigationLink>

      {/*Viewports >= 640px*/}
      <NavigationLink
        styles="hidden
                text-green-600
                font-space-grotesk font-black
                transition-[color] delay-150 duration-300 ease-in-out 
                motion-reduce:transition-none 
                hover:text-green-500
                sm:inline-block"
        to="/"
      >
        <div className="flex justify-center items-center gap-2">
          <TbPaperBag className="text-2xl md:text-3xl" aria-hidden="true" />
          <span className="text-2xl md:text-3xl">Grocery List</span>
        </div>
      </NavigationLink>
    </>
  );
}
