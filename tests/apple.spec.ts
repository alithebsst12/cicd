import { test, expect, type Page } from '@playwright/test';
test('navigatetogtawebsite', async ({ page }) => {

    // go to apple website
    await page.goto('https://www.apple.com')
    // wait 2 seconds 
    await page.waitForTimeout(2000)
    // mnow hover over iphone
    await page.locator("xpath = //*[@class ='globalnav-link-text-container']").nth(3).click({timeout:2000})
    // wait 2 seconds 
    await page.waitForTimeout(2000)
    // now click on iphone 15
    await page.locator("xpath =//*[text()= 'iPhone 14']").nth(1).click({timeout:2000})
     // wait 8 seconds 
    await page.waitForTimeout(8000)
    // now capture text
    let myText = await page.locator("xpath =//*[@class = 'fwl']").textContent()
    // mow print text
    console.log('My text ' + myText)
    // wait 2 seconds 
    await page.waitForTimeout(2000)
    // brandon is mario
    // new added new okay
    // new added
    // coolio
    // i will go to crib
    // idkkkkkkk





























})