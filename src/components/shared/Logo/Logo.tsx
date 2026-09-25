import clsx from "clsx";
import type { LogoProps } from "./Logo.types";
import { TbPaperBag } from "@/assets/icons/icon";

/**
 * Renders the app logo
 *
 * Displays:
 * - the logo icon and "GM" on viewports < 640px
 * - the logo icon and "Grocery List" viewports >= 640px
 */
export default function Logo({ styles }: LogoProps) {
  return (
    <div className={clsx("flex justify-center items-center gap-1", styles)}>
      <TbPaperBag className="text-2xl sm:text-3xl" aria-hidden="true" />

      {/*Viewports < 640px*/}
      <span className="sr-only md:hidden">Grocery List</span>
      <span className="text-2xl tracking-widest md:hidden" aria-hidden="true">
        GL
      </span>

      {/*Viewports >= 640px*/}
      <span className="hidden md:inline md:text-3xl">Grocery List</span>
    </div>
  );
}
