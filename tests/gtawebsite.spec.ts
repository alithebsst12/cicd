import { test, expect, type Page } from '@playwright/test';
test('navigatetonikewebsite', async ({ page }) => {

    // Navigate to the gta website
    await page.goto('https://www.rockstargames.com')
    // now wait 4 seconds
    await page.waitForTimeout(4000)
    // verify url is correct
    await expect (page).toHaveURL('https://www.rockstargames.com')
    // now wait 3 seconds
    await page.waitForTimeout(3000)
    // verify the title is correct 
    await expect (page).toHaveTitle('Rockstar Games')
    // now wait 3 seconds
    await page.waitForTimeout(3000)
    // now click on watch now 
    await page.locator("xpath = (//*[text() = 'Watch Now'])[1]").click({timeout:10000})
     // now wait 30 seconds
     await page.waitForTimeout(30000)
     // now scroll by pixels
     await page.mouse.wheel(0,1000)
     //niveccc




















})// end of test