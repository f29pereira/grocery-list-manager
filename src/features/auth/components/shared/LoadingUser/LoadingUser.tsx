import { FaSpinner } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";
import useLockScroll from "@/hooks/useLockScroll";
import Logo from "@/components/shared/Logo/Logo";
import Credits from "@/components/shared/Credits/Credits";

/**
 * Renders the loading user account
 *
 * The loading icon features a spin animation
 */
export default function LoadingUser() {
  // Translation
  const { t } = useTranslation();

  // Custom hook
  useLockScroll();

  return (
    <div
      className="fixed z-100 inset-0 py-12
              bg-body-bg"
    >
      <div
        className="flex flex-col justify-between items-center gap-10
                  h-full"
      >
        {/*Screen reader only main title*/}
        <h1 className="sr-only">{t("forms.auth.loading")}</h1>

        <Logo styles="text-brand" />

        <div className="flex flex-col items-center gap-10" aria-hidden="true">
          <FaSpinner
            className="text-5xl 
                    text-brand
                      motion-safe:animate-spin"
            aria-hidden="true"
          />
          <p
            className="flex gap-4 items-center font-bold 
                      text-lg text-paragraph
                      sm:text-xl lg:text-2xl"
          >
            {t("forms.auth.loading")} ...
          </p>
        </div>

        <div>
          {/*Screen reader only credits title*/}
          <h2 className="sr-only">{t("credits.title")}</h2>
          <Credits />
        </div>
      </div>
    </div>
  );
}
