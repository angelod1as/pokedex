import { test, expect } from "@playwright/test";
const url = (addon: string) => `http://localhost:3000${addon}`;

test("golden path", async ({ page }) => {
  // Login
  await page.goto(url(""));

  await expect(page.getByRole("heading")).toContainText("Welcome to Pokédex!");

  await page.getByPlaceholder("pikachu@pokecenter.com").fill("111@111");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText('"Email" and "Password" are')).toBeVisible();

  await expect(page.getByRole("paragraph")).toContainText(
    '"Email" and "Password" are required'
  );

  await page.getByPlaceholder("pikachu@pokecenter.com").fill("111@111");

  await page.getByPlaceholder("pika123").fill("123");

  await page.getByRole("button", { name: "Login" }).click();

  // Dashboard page
  await expect(page).toHaveURL(url("/dashboard"));

  await expect(page.locator("h1")).toContainText("Pokédex!");
  await expect(page.locator("body")).toContainText("bulbasaur");

  // Pagination
  await page.getByRole("button", { name: "›" }).click();

  await expect(page).toHaveURL(url("/dashboard?page=2"));
  await expect(page.locator("body")).toContainText("2/66");
  await expect(page.locator("body")).toContainText("spearow");

  await page.getByRole("button", { name: "‹" }).click();
  await expect(page).toHaveURL(url("/dashboard?page=1"));
  await expect(page.locator("body")).toContainText("1/66");
  await expect(page.locator("body")).toContainText("bulbasaur");

  // Favourites 1
  await page
    .locator("div")
    .filter({ hasText: /^bulbasaurgrasspoison$/ })
    .getByRole("button")
    .click();

  expect(
    (await page.context().storageState()).origins[0].localStorage[1]
  ).toHaveProperty("value", "[1]");

  await page
    .locator("div")
    .filter({ hasText: /^ivysaurgrasspoison$/ })
    .getByRole("button")
    .click();

  expect(
    (await page.context().storageState()).origins[0].localStorage[1]
  ).toHaveProperty("value", "[1,2]");

  await page.getByLabel("Filter").fill("saur");
  await expect(page).toHaveURL(url("/dashboard?query=saur"));

  await expect(page.locator("body")).toContainText("bulbasaur");
  await expect(page.locator("body")).toContainText("venusaur");

  // Favourites 2
  await page
    .locator("div")
    .filter({ hasText: /^ivysaurgrasspoison$/ })
    .getByRole("button")
    .click();

  expect(
    (await page.context().storageState()).origins[0].localStorage[1]
  ).toHaveProperty("value", "[1]");

  await page
    .locator("div")
    .filter({ hasText: /^bulbasaurgrasspoison$/ })
    .getByRole("button")
    .click();

  expect(
    (await page.context().storageState()).origins[0].localStorage[1]
  ).toHaveProperty("value", "[]");

  await page.getByLabel("Filter").click();
  await page.getByLabel("Filter").fill("");

  await expect(page).toHaveURL(url("/dashboard"));

  await expect(page.locator("body")).toContainText("charmander");
});
