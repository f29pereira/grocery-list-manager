import Logo from "@/components/shared/Logo/Logo";
import { LuFileX, RiArrowGoBackFill } from "@/assets/icons/icon";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import { useTranslation } from "react-i18next";

/**
 * Renders the page not found with link with:
 * - Logo navigation link
 * - Card width error code, description and navigation link to return to the home page
 */
export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <div className="relative w-screen h-screen overflow-hidden px-6 md:px-0">
      <div
        className="absolute flex justify-center top-5 right-0 left-0 
                  md:justify-start md:left-8 md:top-7"
      >
        <Logo styles="text-brand hover:text-brand-hover" />
      </div>

      <div
        className="flex justify-center items-center w-full h-full
                md:px-0"
      >
        <div
          className="relative px-8 py-10
                  bg-card
                    rounded-3xl shadow-xl
                    md:px-10 md:py-12"
        >
          <h1 className="mb-8">
            <span
              className="mr-4 font-black text-4xl text-title 
                        md:text-5xl lg:text-6xl"
            >
              {t("pageNotFound.title")}
            </span>
          </h1>

          {/*Error code and message*/}
          <h2 className="mb-8 text-lg lg:text-xl">
            <span className="mr-2 text-paragraph">
              {t("pageNotFound.error.label")}{" "}
              <span className="font-bold text-brand">404</span>
            </span>
            <span className="text-paragraph">
              - {t("pageNotFound.error.description")}
            </span>
          </h2>

          <p
            className="mb-8 max-w-sm
                      text-base text-paragraph
                      md:max-w-md lg:mb-16"
          >
            {t("pageNotFound.message")}
          </p>

          {/*Home Link*/}
          <div className="flex justify-center">
            <NavigationLink
              styles="px-6 py-4
                text-white bg-green-600
                shadow-lg shadow-green-600/50 dark:shadow-none
                theme-transition
                hover:bg-green-500
                md:px-8"
              to="/"
              end={true}
            >
              <div className="flex justify-center items-center gap-4">
                <RiArrowGoBackFill
                  className="text-2xl md:text-3xl"
                  aria-hidden="true"
                />
                <span className="font-bold text-base">
                  {t("pageNotFound.home-link")}
                </span>
              </div>
            </NavigationLink>
          </div>

          <LuFileX
            className="absolute top-[35%] right-[5%]
                    text-8xl text-green-400 dark:text-white 
                    opacity-10 dark:opacity-8
                    rotate-30
                    md:text-[150px] md:top-[25%]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
