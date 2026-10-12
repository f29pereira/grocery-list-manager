import GlowingCircle from "./GlowingCircle/GlowingCircle";

/**
 * Renders GlowingCircle components to be displayed at the bottom left of an element
 */
export default function GlowingCircles() {
  return (
    <div className="hidden absolute -bottom-5 -left-5 sm:block">
      <GlowingCircle
        styles="relative text-8xl text-brand 
                md:text-9xl"
        animationSpeed="slow"
      />

      <GlowingCircle
        styles="absolute -top-5 text-6xl text-green-500 dark:text-green-400
               md:text-7xl"
        animationSpeed="medium"
      />

      <GlowingCircle
        styles="absolute -top-10 text-4xl text-green-400 dark:text-green-300
                md:text-5xl"
        animationSpeed="fast"
      />
    </div>
  );
}
