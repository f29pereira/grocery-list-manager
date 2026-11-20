import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import DeleteUserForm from "./DeleteUserForm/DeleteUserForm";
import Circles from "@/components/shared/Icons/GlowingIcons/Circles/Circles";

/**
 * Renders a card with the delete account and go back buttons
 */
export default function DeleteUserConfirmation() {
  // Translation
  const { t } = useTranslation();

  return (
    <Card styles="relative lg:w-225 lg:mx-auto">
      <CardContentWrapper>
        <h1
          className="mb-8 mt-4
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-left lg:text-2xl"
        >
          {t("forms.delete-user.account-screen.title")}
        </h1>

        <p className="text-center text-base text-paragraph lg:text-left">
          {t("forms.delete-user.account-screen.message")}
        </p>

        <div className="lg:hidden">
          <Circles />
        </div>

        <div className="hidden lg:block">
          <Circles iconsPlacement="top-right" />
        </div>

        <DeleteUserForm />
      </CardContentWrapper>
    </Card>
  );
}
