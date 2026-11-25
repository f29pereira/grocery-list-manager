import { defineConfig } from "vitest/config";

/**
 * Vitest configuration
 */
export default defineConfig({
  test: {
    globals: true, // React Testing Library cleans rendered components automatically
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
