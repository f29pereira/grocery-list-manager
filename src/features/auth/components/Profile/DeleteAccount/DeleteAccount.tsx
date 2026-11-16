import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import DeleteAccountButton from "./DeleteAccountButton/DeleteAccountButton";
import GoBackButton from "@/components/ui/Buttons/GoBackButton/GoBackButton";

/**
 * Renders a card with the delete account and go back buttons
 */
export default function DeleteAccount() {
  // Translation
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmiting] = useState<boolean>(false);

  /**
   * Deletes the user's account
   */
  const deleteAccount = () => {
    try {
      setIsSubmiting(true);
      // TO DO: await reauthenticateUserWithCredential(user, email, currentPassword);
      // TO DO: delete account
    } catch (error) {
      setIsSubmiting(false);
    }
    // TO DO: Add error message
  };

  return (
    <Card styles="lg:w-[900px] lg:mx-auto">
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

        {/*TO DO: Add SubmitMessage component to render error message*/}

        <div
          className="mt-10 mb-4
                    lg:flex lg:justify-center lg:items-center lg:gap-10"
        >
          <div className="mb-10 lg:mb-0">
            <DeleteAccountButton
              isSubmitting={isSubmitting}
              handleClick={deleteAccount}
              description={t("forms.delete-user.account-screen.delete-btn")}
            ></DeleteAccountButton>
          </div>

          <GoBackButton
            styles="bg-gray-500 text-button-label
                    shadow-lg shadow-gray-500/50
                    dark:bg-gray-400
                    hover:bg-gray-400 dark:hover:bg-gray-300"
          />
        </div>
      </CardContentWrapper>
    </Card>
  );
}
