import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import { TbPaperBag } from "@/assets/icons/icon";

/**
 * Renders the app logo, used by the Footer component, as a navigation link
 */
export default function FooterLogo() {
  return (
    <div
      className="flex justify-center items-center mb-10 
                lg:mb-0 lg:items-baseline"
    >
      <NavigationLink
        styles="inline-block  
              text-green-600 
              font-space-grotesk font-black
              transition-[color] delay-150 duration-300 ease-in-out 
              motion-reduce:transition-none 
              hover:text-green-500"
        to="/"
      >
        <div className="flex justify-center items-center gap-2">
          <TbPaperBag className="text-2xl md:text-3xl" aria-hidden="true" />
          <span className="text-2xl lg:text-3xl">Grocery List</span>
        </div>
      </NavigationLink>
    </div>
  );
}
