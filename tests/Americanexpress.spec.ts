import { test, expect, type Page } from '@playwright/test';
test('navigatetogtawebsite', async ({ page }) => {

    
   let results = ["men"]

   results.push('women')

   results.push('kids')


   for(let i = 0; i< results.length; i++){ 


    //go to american website
    await page.goto('https://card.americanexpress.com/d/american-express/')
    // wait 5 seconcd
    await page.waitForTimeout(5000)
    // now verify url 
    await expect(page).toHaveURL('https://card.americanexpress.com/d/american-express/')
    // now verify the title
    await expect(page).toHaveTitle('American Express Cards')
    // now click on platnum card
    await page.locator('xpath=//*[@class ="max-w-[170px] text-p2 text-left ml-12 border-solid border-b-4 border-amex-brightBlue"]').click({timeout:3000})
     // wait 4seconcd
     await page.waitForTimeout(4000)
     // now scroll by pixels
     await page.mouse.wheel(0,600)
     // wait 3 seconcd
     await page.waitForTimeout(3000)
     // now campture information
     // let myText = await page.locator('xpath =(//*[@class = "m-auto max-w-content"])[3]').textContent()
     // print it
     // console.log(myText)
     // now click first card
     await page.locator('xpath=(//*[@class = "grid grid-flow-col justify-center items-center gap-8 font-bold text-t5 mb-20"])[1]').click({timeout:3000})
     // wait 2 seconcd
     await page.waitForTimeout(3000)
     // now click second card
     await page.locator('xpath=(//*[@class = "grid grid-flow-col justify-center items-center gap-8 font-bold text-t5 mb-20"])[2]').click({timeout:3000})
     // wait 2 seconcd
     await page.waitForTimeout(2000)
     // now click on compare 
     await page.locator('xpath=//*[text()="Compare 2 Selected Cards"]').click({timeout:3000})
     // wait 3 seconcd
     await page.waitForTimeout(2000)
     // now go back to previous page
     await page.goBack
     // wat will you do
     // wat will you do
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }// end of loop statment 
   
    



















})