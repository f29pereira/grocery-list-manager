import type { CardContentWrapperProps } from "./CardContentWrapper.types";

/**
 * Renders a wrapper component that features an opacity and vertical translation animation
 *
 * Props are defined in {@link CardContentWrapperProps}.
 */
export default function CardContentWrapper({
  children,
}: CardContentWrapperProps) {
  return (
    <div
      className="transition-[opacity,translate] duration-300 ease-out
                starting:opacity-0 starting:translate-y-2 motion-reduce:transition-none"
    >
      {children}
    </div>
  );
}
