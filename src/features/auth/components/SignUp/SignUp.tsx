import { useTranslation } from "react-i18next";
import { useMultiStep } from "@/contexts/MultiStepContext/useMultiStep";
import { getStepsDescription } from "./SignUp.utils";
import Card from "@/components/shared/Card/Card";
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
    <div
      className="min-h-screen px-6 py-10
                sm:px-10
                lg:flex lg:justify-center lg:items-center lg:p-0"
    >
      <Card
        styles="px-6 py-10 
              sm:px-10 md:px-20
              lg:w-200 lg:h-187.5 lg:px-10"
      >
        <div className="lg:flex lg:gap-40 lg:w-full lg:h-full">
          <div className="mb-8 lg:flex lg:flex-col lg:gap-4 lg:mb-0">
            <div
              className="flex justify-center mb-4
                        lg:flex-none"
            >
              <LogoHomeLink />
            </div>
            <StepsList stepsList={stepsList} currentStep={currentStep} />
          </div>

          <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            {currentStep === 0 && <AuthStep />}
            {currentStep === 1 && <EmailVerificationStep />}
            {currentStep === 2 && <UserDetailStep />}
          </div>
        </div>
      </Card>
    </div>
  );
}
