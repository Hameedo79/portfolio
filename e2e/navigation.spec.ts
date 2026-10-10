import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("nav links scroll to the right section", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /skills/i })
      .first()
      .click();
    await expect(page.locator("#skills")).toBeInViewport();
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const menuButton = page.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
