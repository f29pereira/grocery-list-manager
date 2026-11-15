import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "@/components/shared/Card/Card";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import DeleteAccountButton from "./DeleteAccountButton/DeleteAccountButton";

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

        <p className="text-base text-paragraph">
          {t("forms.delete-user.account-screen.message")}
        </p>

        {/*TO DO: Add SubmitMessage component to render error message*/}

        <div className="flex justify-center items-center gap-8 mt-10">
          <DeleteAccountButton
            isSubmitting={isSubmitting}
            handleClick={deleteAccount}
            description={t("forms.delete-user.account-screen.delete-btn")}
          ></DeleteAccountButton>

          {/*TO DO: Add Go Back link*/}
        </div>
      </CardContentWrapper>
    </Card>
  );
}
