import { test, expect } from '@playwright/test';

test('loginto google website', async ({ page }) => {
await page.goto('https://www.google.com');
// wait 3 seconds
await page.waitForTimeout(3000)












})// end of Test
