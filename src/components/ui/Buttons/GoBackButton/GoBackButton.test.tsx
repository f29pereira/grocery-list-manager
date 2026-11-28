import { describe, beforeEach, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import userEvent from "@testing-library/user-event";
import type { UserEvent } from "@testing-library/user-event";
import i18n from "@/lib/i18n/i18nForTests";
import { FIXTURE_SHARED_UI } from "../../../../../test/fixtures/groceryListManager.fixtures";
import GoBackButton from "./GoBackButton";

const mockNavigate = vi.hoisted(() => vi.fn());

/**
 * React Router useNavigate mock
 */
vi.mock("react-router", async () => {
  const originalModule = await vi.importActual("react-router");

  return {
    ...originalModule,
    useNavigate: () => mockNavigate,
  };
});

/**
 * Unit test for component: GoBackButton
 */
describe("GoBackButton component", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();

    render(
      <I18nextProvider i18n={i18n}>
        <GoBackButton />
      </I18nextProvider>,
    );
  });

  it("renders a go back button and calls navigate when clicked", async () => {
    const button = screen.getByRole("button", {
      name: FIXTURE_SHARED_UI.buttons.goBack,
    });

    await user.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
