import { test, expect, type Page } from '@playwright/test';
test('navigatetolvwebsite', async ({ page }) => {


    // put values in a placeholder

    let options = ['men']
    options.push('women')
    options.push('kids')

    // create for loop
    for(let i= 0; i<options.length;i++){
    // naviage to website
    await page.goto('https://www2.hm.com/en_us/index.html')
    
    // now veriy current url
    await expect (page).toHaveURL('https://www2.hm.com/en_us/index.html')
   
     // now verify title
     await expect (page).toHaveTitle('H&M | Online Fashion, Homeware & Kids Clothes | H&M US')
    // wait 3 seconds
    // now verify search box exist
   // await expect (page.locator('xpath=(//*[@class ="psxM XAI6"])[3]]')).toBeVisible({timeout:3000})
   
    // now clear  on seach box
    await page.locator('(//*[@class ="psxM XAI6"])[3]').clear({timeout:3000})
     // wait 3 seconds
     await page.waitForTimeout(3000)
     // now click on seach
     await page.locator('(//*[@class ="psxM XAI6"])[3]').click({timeout:3000})
     

    // now type on seach field
    await page.locator('(//*[@class ="psxM XAI6"])[3]').fill(options[i]),({timeout:5000})
    
    
      // now click on search
    await  page.locator("xpath=//*[@class ='__2OnJ u9au']").nth(8).click(),({Timeout:5000})
     // wait 3 seconds
     await page.waitForTimeout(5000)
     // now scroll by pixels
     await page.mouse.wheel(0,600)
     //wait 3 seconds
     await page.waitForTimeout(5000)
     // now create condition sratement 
     
     if(i==0){

        let B1 = await page.locator("xpath = //*[@class ='link']")

        B1.nth(0).click(),({Timeout:3000})

        await page.waitForTimeout(5000)

     }else if(i==1){

        let B2 = await page.locator("xpath = //*[@class ='link']")
        B2.nth(4).click(),({Timeout:3000})

        await page.waitForTimeout(5000)
     }else if(i==2){

       
        let B3 = await page.locator("xpath = //*[@class ='link']")
        B3.nth(4).click(),({Timeout:3000})
       
     }// end of condition statement 
     // now click add to bag
     await page.locator("xpath=//*[contains(text(),' Add to bag')]").click(),({Timeout:3000})
     // wait 3 seconds
     await page.waitForTimeout(3000)
     // now choose your size
     await page.locator("xpath=//*[@class ='value  ']").nth(4).click({timeout:3000})
     // wait 3 seconds
     await page.waitForTimeout(3000)

     // now print price
     let myPrice = await page.locator("xpath=//*[@id='product-price']").textContent()
     console.log('this is the price ' + myPrice)
     // wait 3 seconds
     await page.waitForTimeout(3000)



    

      
     


















    }// end of for loop
})// end 0f test