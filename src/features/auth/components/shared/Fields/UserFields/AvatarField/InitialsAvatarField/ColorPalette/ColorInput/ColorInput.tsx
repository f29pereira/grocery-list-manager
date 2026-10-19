import { useFormContext } from "react-hook-form";
import type { ColorInputProps } from "./ColorInput.types";
import type { UserDetailsFields } from "@/features/auth/components/types/auth.types";

/**
 * Renders a color palette radio button
 */
export default function ColorInput({ value }: ColorInputProps) {
  // React Hook Form: context
  const { register } = useFormContext<UserDetailsFields>();

  return (
    <input
      className="sr-only peer"
      id={`avatar-color-${value}`}
      type="radio"
      value={value}
      {...register("initialsAvatarColor")}
    />
  );
}
