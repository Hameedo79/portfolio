import { test, expect } from "@playwright/test";

test.describe("Theme toggle", () => {
  test("switches between dark and light theme", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", "dark");

    await page
      .getByRole("button", { name: /toggle light and dark theme/i })
      .click();
    await expect(html).toHaveAttribute("data-theme", "light");

    await page
      .getByRole("button", { name: /toggle light and dark theme/i })
      .click();
    await expect(html).toHaveAttribute("data-theme", "dark");
  });

  test("persists the chosen theme across reloads", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("button", { name: /toggle light and dark theme/i })
      .click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });
});
