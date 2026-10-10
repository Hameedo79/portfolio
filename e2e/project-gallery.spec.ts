import { test, expect } from "@playwright/test";

test.describe("Project gallery", () => {
  test("lightbox opens on click and can be closed", async ({ page }) => {
    await page.goto("/#projects");
    const firstGalleryImage = page
      .getByRole("button", { name: /view larger screenshot/i })
      .first();
    await firstGalleryImage.scrollIntoViewIfNeeded();
    await firstGalleryImage.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await page.getByRole("button", { name: /close preview/i }).click();
    await expect(dialog).not.toBeVisible();
  });

  test("closing the lightbox returns focus to the trigger", async ({
    page,
  }) => {
    await page.goto("/#projects");
    const firstGalleryImage = page
      .getByRole("button", { name: /view larger screenshot/i })
      .first();
    await firstGalleryImage.scrollIntoViewIfNeeded();
    await firstGalleryImage.click();
    await page.keyboard.press("Escape");
    await expect(firstGalleryImage).toBeFocused();
  });
});
