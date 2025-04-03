import { test, expect, type Page } from '@playwright/test';
test('navigatetogtawebsite', async ({ page }) => {
    // naviage to the website 
    await page.goto('https://www.ally.com')
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
   // now verify the url is up
   await expect (page).toHaveURL('https://www.ally.com')
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
    // now verify the title 
    await expect (page).toHaveTitle('Banking, Investing, Home Loans & Auto Finance | Ally')
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
    // now verify the function 
    await expect (page.locator("xpath = //*[@class = 'allysf-icon allysf-header-v1-icon']").nth(6)).toBeVisible
    // now click on function
    await page.locator("xpath = (//*[@class = 'allysf-icon allysf-header-v1-icon'])[6]").click({timeout:3000})
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
    // now click on personal
    await page.locator("xpath = //*[text()= ' Personal ']").click({timeout:3000})
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
    // now scroll down by pixels
    await page.mouse.wheel(0,1200)
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
    // now capture the messaage 
    let myResults = await page.locator("xpath = //*[@class = 'allysf-text-v1 ']").nth(2).textContent()
    // now print the statement 
    console.log('this is my results ' + myResults)
    // now wait 3 seconds 
    await page.waitForTimeout(3000)
    //frgrgrgrtgferfrefrgrtrggbrthbtybnt6ynynrvrgbtbtbtytbbnty



 




















})// end of first 
