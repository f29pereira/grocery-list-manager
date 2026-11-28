import { describe, beforeEach, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { UserEvent } from "@testing-library/user-event";
import { FIXTURE_SHARED_UI } from "../../../../../test/fixtures/groceryListManager.fixtures";
import CloseButton from "./CloseButton";

const mockHandleClose = vi.fn();

/**
 * Unit test for component: CloseButton
 */
describe("CloseButton component", () => {
  let user: UserEvent;

  beforeEach(() => {
    vi.clearAllMocks();
    user = userEvent.setup();

    render(
      <CloseButton
        ariaLabel={FIXTURE_SHARED_UI.buttons.close}
        handleClose={mockHandleClose}
      />,
    );
  });

  it("renders a close button and calls a function when clicked", async () => {
    const button = screen.getByRole("button", {
      name: FIXTURE_SHARED_UI.buttons.close,
    });

    await user.click(button);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
