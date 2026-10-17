import { useTranslation, Trans } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import Card from "@/components/shared/Card/Card";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import LogoHomeLink from "@/components/ui/Links/LogoHomeLink/LogoHomeLink";
import AddUserDetailsForm from "../../shared/AddUserDetailsForm/AddUserDetailsForm";
import GlowingCircles from "@/components/shared/GlowingCircles/GlowingCircles";

/**
 * Renders the add user details form for users without complete profile
 */
export default function FinishProfile() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { authUser } = useAuth();

  return (
    <Card styles="relative lg:mx-auto lg:w-200">
      <div className="flex justify-center mb-8">
        <LogoHomeLink />
      </div>

      <CardContentWrapper>
        <h1
          className="mb-8 mt-4
                  font-black 
                  text-center text-xl text-title
                  focus-visible:outline-none
                  lg:text-2xl"
        >
          {t("forms.finish-user-profile.title")}
        </h1>

        <p
          className="mb-8 text-center text-paragraph 
                    md:mx-auto md:max-w-150"
        >
          <Trans
            i18nKey="forms.finish-user-profile.message"
            values={{
              email: authUser?.user?.email ?? "",
            }}
            components={{ strong: <strong className="break-all" /> }}
          />
        </p>

        <AddUserDetailsForm />
      </CardContentWrapper>

      <div className="hidden sm:block lg:hidden">
        <GlowingCircles circlesPlacement="top-right" />
      </div>

      <div className="hidden lg:block">
        <GlowingCircles circlesPlacement="bottom-left" />
      </div>
    </Card>
  );
}
