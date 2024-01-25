import { test, expect, type Page } from '@playwright/test';
test('navigatetogtawebsite', async ({ page }) => {

   // add your values


   let results = ["men"]

   results.push('women')

   results.push('kids')


   for(let i = 0; i< results.length; i++){ 



    // naviage to website

    await page.goto('https://www.zara.com/us/')

    // now wait 3 seconds

    await page.waitForTimeout(3000)

    // now veriy url

    await expect (page).toHaveURL('https://www.zara.com/us/')

     // now wait 3 seconds

     await page.waitForTimeout(3000)


     // now verify title of page

     await expect (page).toHaveTitle('ZARA United States | Sale')


     // now click on search

     await page.locator("//*[text()='Search']").click({timeout:3000})


     // wait for 5 seconds

     await page.waitForTimeout(5000)

     // now verify search box exists

     await expect (page.locator('//*[@class = "search-products-form__input"]')).toBeVisible({timeout:3000})


     // now click on search

      let name  = await page.locator('xpath = //*[@class = "search-products-form__input"]')

      name.click

      name.clear

      name.fill(results[i])


     // wait for 5 seconds

     await page.waitForTimeout(5000)

     // now create an if condition


     if(i==0){

        let B1 = await page.locator("xpath = //*[@class = 'products-category-grid-media-carousel-item']")

        B1.nth(0).click(),({Timeout:3000})

        await page.waitForTimeout(5000)

     }else if(i==1){

        let B2 = await page.locator("xpath = //*[@class = 'products-category-grid-media-carousel-item']")
        B2.nth(4).click(),({Timeout:3000})

        await page.waitForTimeout(5000)
     }else if(i==2){

       
        let B3 = await page.locator("xpath = //*[@class = 'products-category-grid-media-carousel-item']")
        B3.nth(4).click(),({Timeout:3000})


     }



























   }// end of loop

})// end of irst test