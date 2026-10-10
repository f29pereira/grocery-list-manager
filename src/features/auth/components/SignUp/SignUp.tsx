import { useTranslation } from "react-i18next";
import { useMultiStep } from "@/contexts/MultiStepContext/useMultiStep";
import { getStepsDescription } from "./SignUp.utils";
import Card from "@/components/shared/Card/Card";
import CardContentWrapper from "@/components/shared/Card/CardContentWrapper/CardContentWrapper";
import LogoHomeLink from "@/components/ui/Links/LogoHomeLink/LogoHomeLink";
import StepsList from "@/components/shared/StepsList/StepsList";
import AuthStep from "./Steps/AuthStep/AuthStep";
import EmailVerificationStep from "./Steps/EmailVerificationStep/EmailVerificationStep";
import UserDetailStep from "./Steps/UserDetailsStep/UserDetailsStep";

/**
 * Renders the multi-step sign up with:
 * - List of steps
 * - Form steps: Authentication, Email verification and User details
 */
export default function SignUp() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { currentStep } = useMultiStep();

  // Data
  const stepsList = getStepsDescription(t);

  return (
    <Card styles="h-205 md:h-207.5 lg:w-200 lg:h-187.5">
      <div className="lg:flex lg:gap-30 lg:w-full lg:h-full">
        <div className="mb-8 lg:flex lg:flex-col lg:gap-4 lg:mb-0">
          <div className="flex justify-center mb-6 lg:flex-none">
            <LogoHomeLink />
          </div>
          <StepsList stepsList={stepsList} currentStep={currentStep} />
        </div>

        <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
          <CardContentWrapper key={currentStep}>
            {currentStep === 0 && <AuthStep />}
            {currentStep === 1 && <EmailVerificationStep />}
            {currentStep === 2 && <UserDetailStep />}
          </CardContentWrapper>
        </div>
      </div>
    </Card>
  );
}
