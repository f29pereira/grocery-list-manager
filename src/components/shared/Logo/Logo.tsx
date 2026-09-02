import type { LogoProps } from "./Logo.types";
import clsx from "clsx";
import { TbPaperBag } from "@/assets/icons/icon";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the app logo as a navigation link
 *
 * Displays:
 * - the logo icon and "GM" on viewports < 640px
 * - the logo icon and "Grocery List" viewports >= 640px
 *
 * Props are defined in {@link LogoProps}.
 */
export default function Logo({ styles }: LogoProps) {
  return (
    <NavigationLink
      styles={clsx(
        "inline-block",
        "font-space-grotesk font-black",
        "theme-transition",
        styles,
      )}
      to="/"
    >
      <div className="flex justify-center items-center gap-1">
        <TbPaperBag className="text-2xl sm:text-3xl" aria-hidden="true" />

        {/*Viewports < 640px*/}
        <span className="sr-only md:hidden">Grocery List</span>
        <span className="text-2xl tracking-widest md:hidden" aria-hidden="true">
          GL
        </span>

        {/*Viewports >= 640px*/}
        <span className="hidden md:inline md:text-3xl">Grocery List</span>
      </div>
    </NavigationLink>
  );
}
