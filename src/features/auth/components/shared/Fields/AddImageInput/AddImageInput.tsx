import { useTranslation } from "react-i18next";
import { MdAddAPhoto } from "@/assets/icons/icon";
import type { UserDetailsFields } from "../../../types/auth.types";
import { useFormContext } from "react-hook-form";
import { addImageInputValidation } from "./AddImageInput.utils";

/**
 * Renders the add user's avatar image button
 */
export default function AddImageInput() {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const { register } = useFormContext<UserDetailsFields>();

  return (
    <label
      className="flex justify-center items-center w-11 h-11
              bg-white hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-900
                theme-transition  
                border-2 border-solid border-input rounded-full cursor-pointer
                has-focus-visible:focus-ring has-focus-visible:outline-offset-2
                md:w-12.5 md:h-12.5"
      htmlFor="avatar-image"
    >
      <MdAddAPhoto className="text-2xl text-brand" aria-hidden="true" />
      <span className="sr-only">Add Avatar Image</span>
      <input
        className="sr-only"
        type="file"
        id="avatar-image"
        {...register("avatarFile", addImageInputValidation(t))}
      />
    </label>
  );
}
