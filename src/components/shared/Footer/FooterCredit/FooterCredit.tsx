import { FaRegCopyright } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";

/**
 * Renders the footer credits with:
 * - Copyright icon
 * - Year
 * - Project name
 * - GitHub repo link
 */
export default function FooterCredit() {
  const { t } = useTranslation();

  return (
    <div
      className="mt-20
                font-bold 
              text-slate-700 dark:text-slate-300 text-sm 
                lg:mt-44 lg:font-normal lg:text-base
                xl:mt-50"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex justify-center items-center mb-4 lg:mb-0">
          <span className="sr-only">{t("footer.credits.copyright")}</span>
          <FaRegCopyright className="text-lg mr-2" aria-hidden="true" />
          <span className="mr-2">2026</span>
          <span className="mr-2">Grocery List</span>
        </div>

        <div className="flex justify-center items-center">
          <span className="mr-1">{t("footer.credits.made-by")}</span>
          <a
            className="rounded-sm
                  font-bold
                  text-base text-link
                  focus-visible:focus-ring focus-visible:outline-offset-2
                  focus-visible:dark:bg-transparent
                  theme-transition
                hover:text-link-hover 
                  hover:underline hover:underline-offset-8 
                  hover:decoration-text-link"
            href="https://github.com/f29pereira"
            target="_blank"
            rel="noopener noreferrer"
          >
            f29.pereira
            <span className="sr-only">{t("footer.credits.new-tab")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
