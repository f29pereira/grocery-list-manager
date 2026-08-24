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
              text-brand 
              font-space-grotesk font-black
              theme-transition 
              hover:text-brand-hover"
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
