import { useTranslation } from "react-i18next";
import { FaUserTimes } from "@/assets/icons/icon";
import PillAppLink from "@/components/ui/Links/AppLink/PillAppLink/PillAppLink";

/**
 * Renders a link that redirects to the delete account page
 */
export default function DeleteUserLink() {
  // Translation
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mt-16 mb-4">
      <PillAppLink
        styles="text-white bg-red-600 dark:bg-red-400
                shadow-lg shadow-red-600/50
                theme-transition
                hover:bg-red-500 dark:hover:bg-red-300"
        to="/delete-account"
      >
        <div className="flex justify-center items-center gap-4">
          <FaUserTimes
            className="text-2xl text-button-label md:text-3xl"
            aria-hidden="true"
          />
          <span className="font-bold text-button-label dark:text-slate-800">
            {t("forms.delete-user.delete-link")}
          </span>
        </div>
      </PillAppLink>
    </div>
  );
}
