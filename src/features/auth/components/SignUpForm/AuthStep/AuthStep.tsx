import { useTranslation } from "react-i18next";
import type { AuthStepProps } from "./AuthStep.types";
import clsx from "clsx";
import useToggle from "@/hooks/useToggle";
import PasswordToggleButton from "../../shared/PasswordToggleButton/PasswordToggleButton";
import CreateAccountButton from "./CreateAccountButton/CreateAccountButton";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the user authentication form step
 */
export default function AuthStep({ nextStep }: AuthStepProps) {
  // Translation
  const { t } = useTranslation();

  // Custom Hook
  const { isToggled, toggle } = useToggle(false); // Password visibility

  /**
   * Submits the authentication form
   */
  const submit = () => {
    // TO DO: Add Firebase account creation
    nextStep();
  };

  return (
    <div>
      {/*Main title*/}
      <h1
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  lg:text-2xl"
      >
        {t("forms.signUp.auth-step.title")}
      </h1>

      <form className="flex flex-col justify-center" action={submit} noValidate>
        {/*Email*/}
        <div className="flex items-center gap-4 mb-4">
          <label className="text-label" htmlFor="email">
            {t("forms.signUp.auth-step.email-label")}
          </label>
        </div>

        {/*TO DO: Add input validation (React Hook Form) + error message component*/}
        <input
          className="w-full px-4 py-2
                  text-base text-paragraph
                  border-2 border-solid border-slate-300 dark:border-white 
                  rounded-full
                  focus-visible:focus-ring focus-visible:outline-offset-2
                placeholder:text-placeholder placeholder:italic"
          type="email"
          id="email"
          autoComplete="email"
          placeholder="e.g johndoe@lorem.com"
        />

        {/*Password*/}
        <div className="flex items-center gap-4 mt-8 mb-4">
          <label className="text-label" htmlFor="password">
            {t("forms.signUp.auth-step.password-label")}
          </label>
        </div>

        <div className="relative mb-10">
          {/*TO DO: Add input validation (React Hook Form) + error message component + password rules*/}
          <input
            className={clsx(
              "w-full h-12 px-4 py-2",
              "text-paragraph",
              "border-2 border-solid border-slate-300 dark:border-white",
              "rounded-full",
              "focus-visible:focus-ring focus-visible:outline-offset-2",
              "placeholder:text-placeholder placeholder:italic",
              isToggled ? "text-base" : "text-lg tracking-widest",
            )}
            type={isToggled ? "text" : "password"}
            id="password"
          />

          <PasswordToggleButton isToggled={isToggled} toggle={toggle} />
        </div>

        <CreateAccountButton />
      </form>

      {/*TO DO: Add Google account*/}

      {/*Sign In link*/}
      <div className="flex justify-center items-center gap-2 mt-10">
        <p className="text-paragraph">
          {t("forms.signUp.auth-step.signIn-message")}
        </p>
        <NavigationLink
          styles="font-bold 
                  text-base text-link
                  theme-transition
                  hover:text-link-hover 
                  hover:underline hover:underline-offset-8 
                  hover:decoration-text-link"
          to="/signin"
        >
          {t("forms.signUp.auth-step.signIn-link")}
        </NavigationLink>
      </div>
    </div>
  );
}
