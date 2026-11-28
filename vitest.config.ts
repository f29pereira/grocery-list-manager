import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

/**
 * Vitest configuration
 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true, // React Testing Library cleans rendered components automatically
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);
