import { test, expect, type Page } from '@playwright/test';
test('navigatetogtawebsite', async ({ page }) => {



    //go to american website
    await page.goto('https://card.americanexpress.com/d/american-express/')
    // wait 6 seconc
    await page.waitForTimeout(6000)
    // now verify url 
    await expect(page).toHaveURL('https://card.americanexpress.com/d/american-express/')
    // now verify the title
    await expect(page).toHaveTitle('American Express Cards')
    // now click on platnum card
    await page.locator('xpath=//*[@class ="max-w-[170px] text-p2 text-left ml-12 border-solid border-b-4 border-amex-brightBlue"]').click({timeout:3000})
     // wait 6 seconc
     await page.waitForTimeout(6000)
     // now scroll by pixels
     await page.mouse.wheel(0,600)
     // wait 6 seconc
     await page.waitForTimeout(6000)
     // now campture information
     let myText = await page.locator('xpath =(//*[@class = "m-auto max-w-content"])[3]').textContent()
     // print it
     console.log(myText)

   




















})