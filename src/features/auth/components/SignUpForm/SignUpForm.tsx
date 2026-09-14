import Logo from "@/components/shared/Logo/Logo";
import StepsList from "@/components/shared/StepsList/StepsList";
import AuthStep from "./Steps/AuthStep/AuthStep";
import EmailVerificationStep from "./Steps/EmailVerificationStep/EmailVerificationStep";
import { useTranslation } from "react-i18next";
import { useMultiStep } from "@/contexts/MultiStepContext/useMultiStep";
import { getStepsDescription } from "./SignUpForm.utils";

/**
 * Renders the multi-step sign up form with:
 * - List of steps
 * - Authentication step
 * - Email Verification step
 */
export default function SignUpForm() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { currentStep } = useMultiStep();

  // Data
  const stepsList = getStepsDescription(t);

  return (
    <div
      className="min-h-screen px-6 py-10
                md:px-10
                lg:flex lg:justify-center lg:items-center lg:p-0"
    >
      <div
        className="px-6 py-10 overflow-hidden
                bg-card 
                  rounded-3xl 
                  shadow-xl dark:shadow-none
                  sm:px-10 md:px-20
                  lg:w-200 lg:h-187.5 lg:px-10"
      >
        <div className="lg:flex lg:gap-40 lg:w-full lg:h-full">
          <div className="mb-8 lg:flex lg:flex-col lg:gap-4 lg:mb-0">
            <div className="flex justify-center lg:flex-none">
              <Logo styles="text-brand hover:text-brand-hover" />
            </div>
            <StepsList stepsList={stepsList} currentStep={currentStep} />
          </div>

          <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            {currentStep === 0 && <AuthStep />}
            {currentStep === 1 && <EmailVerificationStep />}
            {/*TO DO: Add User Details step*/}
          </div>
        </div>
      </div>
    </div>
  );
}
