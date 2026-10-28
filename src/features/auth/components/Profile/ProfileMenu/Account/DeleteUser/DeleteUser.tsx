import { useTranslation } from "react-i18next";
import DeleteUserLink from "./DeleteUserLink/DeleteUserLink";

/**
 * Renders a card with a link to redirect to the delete account page
 */
export default function DeleteUser() {
  // Translation
  const { t } = useTranslation();

  return (
    <>
      {/*Main title*/}
      <h2
        className="mb-8  mt-4
                  font-black 
                  text-center text-2xl text-title
                  focus-visible:outline-none
                  lg:text-left xl:text-3xl"
      >
        {t("forms.delete-user.title")}
      </h2>

      <p
        className="text-center text-paragraph
                  lg:text-left"
      >
        {t("forms.delete-user.message")}
      </p>

      <DeleteUserLink />
    </>
  );
}
