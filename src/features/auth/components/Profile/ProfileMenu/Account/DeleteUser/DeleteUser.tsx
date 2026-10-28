import { useTranslation } from "react-i18next";

/**
 * Renders a card with button to redirect to the delete account page
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

      {/*TO DO: Add button to redirect to delete page*/}
    </>
  );
}
