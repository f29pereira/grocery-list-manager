import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { useTranslation } from "react-i18next";
import { FaSignOutAlt } from "@/assets/icons/icon";
import SubmitButton from "@/components/ui/Buttons/SubmitButton/SubmitButton";

/**
 * Renders the sign out button
 */
export default function SignOutButton() {
  // Translation
  const { t } = useTranslation();

  // State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  /**
   * Signs out a user
   */
  const signOutUser = async () => {
    try {
      setIsSubmitting(true);
      await signOut(auth);
      setIsSubmitting(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      /*TO DO: Display error message screen*/
    }
  };

  return (
    <SubmitButton
      styles="bg-button 
            shadow-lg shadow-green-600/50 
            hover:bg-button-hover
            disabled:hover:bg-button"
      handleClick={signOutUser}
      isSubmitting={isSubmitting}
    >
      <div className="flex justify-center items-center gap-2">
        <FaSignOutAlt
          className="text-lg text-button-label"
          aria-hidden="true"
        />
        <span
          className="max-w-26.25 
                    font-bold text-sm 
                  text-button-label truncate"
        >
          {t("nav.profile.pop-up.sign-out-btn")}
        </span>
      </div>
    </SubmitButton>
  );
}
