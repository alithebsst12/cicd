
import { test, expect, type Page } from '@playwright/test';

test('gotogtawebsite', async ({ page }) => {


    //login to the gta website 
    await page.goto('https://www.rockstargames.com')
    // now wait for 6 sec
    await page.waitForTimeout(6000)
    // now verify the url is up
    await expect (page).toHaveURL('https://www.rockstargames.com/')
    // wait 5 seconds
    await page.waitForTimeout(5000)
    // now verify the title is correct 
    await expect (page).toHaveTitle('Rockstar Games')
     // wait 5 seconds
    await page.waitForTimeout(5000)
    // now click on the accept all cookies buttton 
    await page.locator("xpath = //*[text() = 'ACCEPT ALL COOKIES']").click({timeout:5000})
    // NOW CLICK ON THE SEARCH BUTTON 
    await page.locator('xpath = //*[@class = "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a _1b6t9rh0"]').click({timeout:9000})
    // wait 5 seconds
    await page.waitForTimeout(9000)





























})