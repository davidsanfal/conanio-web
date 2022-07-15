const { test, expect } = require('@playwright/test');


const BASE_URL = process.env.CONANIO_URL ? process.env.CONANIO_URL : 'http://localhost:3000'


test('should navigate to the FAQ page from HOME page', async ({ page }) => {
  await page.goto(BASE_URL)
  await expect(page.locator('h1')).toContainText('Conan, the C/C++ Package Manager')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=FAQ')
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL(BASE_URL + '/faq')
})
