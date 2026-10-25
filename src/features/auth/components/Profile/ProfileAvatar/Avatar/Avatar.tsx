import clsx from "clsx";
import type { AvatarProps } from "./Avatar.types";

/**
 * Renders a profile avatar with the user's image
 *
 * Props are defined in {@link AvatarProps}.
 */
export default function Avatar({ styles, imageUrl }: AvatarProps) {
  return (
    <div className={clsx("rounded-full overflow-hidden", styles)}>
      <img className="w-full h-full object-cover" src={imageUrl} alt="" />
    </div>
  );
}
