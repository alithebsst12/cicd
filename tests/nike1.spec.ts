
import { test, expect, type Page } from '@playwright/test';
test('navigatetothenikewebsite', async ({ page }) => {

    // loginto the nike webiste
    await page.goto("https://www.nike.com");
    // wait for 5 seconds
    await page.waitForTimeout(5000)
































})