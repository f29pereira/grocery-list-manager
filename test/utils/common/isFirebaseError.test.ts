import { describe, expect, it } from "vitest";
import { isFirebaseError } from "@/utils/common.utils";
import { FirebaseError } from "firebase/app";

/**
 * Unit test for the function: isFirebaseError
 */
describe("isFirebaseError", () => {
  it("returns false if receives a non firebase error", () => {
    expect(isFirebaseError(new Error("Non Firebase error"))).toBe(false);
  });

  it("returns true if receives a firebase error", () => {
    expect(isFirebaseError(new FirebaseError("auth/invalid-email", ""))).toBe(
      true,
    );
  });
});
