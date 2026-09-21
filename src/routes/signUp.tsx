import MultiStepProvider from "@/contexts/MultiStepContext/MultiStepProvider";
import SignUp from "@/features/auth/components/SignUp/SignUp";

/**
 * Renders the SignUp component for the "sign-up" route
 */
export default function SignUpRoute() {
  return (
    <MultiStepProvider>
      <SignUp />
    </MultiStepProvider>
  );
}
