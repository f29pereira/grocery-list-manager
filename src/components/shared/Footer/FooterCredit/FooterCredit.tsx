import { FaRegCopyright } from "@/assets/icons/icon";

/**
 * Renders the footer credits with:
 * - Copyright icon
 * - Year
 * - Project name
 * - GitHub repo link
 */
export default function FooterCredit() {
  return (
    <div
      className="flex justify-center items-center mt-10 
                font-bold text-slate-700 text-sm 
                lg:mt-44 lg:font-normal lg:text-base
                xl:mt-50"
    >
      <span className="sr-only">Copywright</span>
      <FaRegCopyright className="text-lg mr-2" aria-hidden="true" />
      <span className="mr-2">2026</span>
      <span className="mr-2">Grocery List</span>
      <span className="mr-1">Made by</span>
      <a
        className="rounded-sm
                  focus-visible:outline-solid focus-visible:outline-[3.2px] 
                  focus-visible:outline-offset-2 focus-visible:outline-blue-500
                  focus-visible:bg-blue-50
                  transition-[color] delay-150 duration-300 ease-in-out
                  motion-reduce:transition-none
                  hover:underline hover:underline-offset-8 hover:decoration-slate-600"
        href="https://github.com/f29pereira"
        target="_blank"
        rel="noopener noreferrer"
      >
        f29.pereira<span className="sr-only">Opens in a new tab</span>
      </a>
    </div>
  );
}
