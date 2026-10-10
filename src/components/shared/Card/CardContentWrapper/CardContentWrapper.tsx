import type { CardContentWrapperProps } from "./CardContentWrapper.types";

/**
 * Renders a wrapper component that features an opacity animation
 *
 * Props are defined in {@link CardContentWrapperProps}.
 */
export default function CardContentWrapper({
  children,
}: CardContentWrapperProps) {
  return (
    <div
      className="transition-opacity duration-300 ease-out
                starting:opacity-0 motion-reduce:transition-none"
    >
      {children}
    </div>
  );
}
