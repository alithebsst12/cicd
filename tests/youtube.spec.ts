import { test, expect, type Page } from '@playwright/test';
test('navigatetolvwebsite', async ({ page }) => {


   
    // go on youtube
    await page.goto('https://www.youtube.com')
    // verify url is correct 
    await expect(page).toHaveURL('https://www.youtube.com')
    // now verify title o the page
    await expect(page).toHaveTitle("YouTube")
    console.log('Title is correct')
    // wait 3 seconds
    await page.waitForTimeout(3000)
    // now click on search
    await page.locator("xpath = (//*[@id = 'search'])[3]").click()
    // now type ahmed khedr on search field
    await page.locator("xpath = (//*[@id = 'search'])[3]").fill('ahmed khedr taha')
     // wait 3 seconds
    // await page.waitForTimeout(5000)
     // now click on search
     await page.locator('xpath =//*[@class = "style-scope yt-icon"]').nth(10).click()
     // wait 3 seconds
      await page.waitForTimeout(3000)
     // now scoll down
     // await page.mouse.wheel(0,1000)
     // wait 5 seconds
      await page.waitForTimeout(5000)
     // now click and listen to the quran
      await page.locator("xpath =(//*[contains(@class,'yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt')])[1]").click()
     // now wait and listen to the holy quran 
      await page.waitForTimeout(80000)
      // now go back
      await page.goBack()
      // wait 3 seconds
      await page.waitForTimeout(5000)
      //let options = await page.locator("xpath =//*[contains(@class,'yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt')]")
      //if(5>3){

       // options.nth(5).click
       // await page.goBack()
       // wait 3 seconds
      
    //}
     // now click on search
     await page.locator("xpath = (//*[@id = 'search'])[3]").click()
     // now type ahmed khedr on search field
     await page.locator("xpath = (//*[@id = 'search'])[3]").fill('sherif mutafa surah mariyam')
      // wait 3 seconds
     // await page.waitForTimeout(5000)
      // now click on search
      await page.locator('xpath =//*[@class = "style-scope yt-icon"]').nth(10).click()
      // wait 3 seconds
       await page.waitForTimeout(3000) 
       // now listen to the quran
       await page.locator("xpath = //*[text()= 'Soothing recitation of Surah Maryam by Sherif Mostafa']").click()
       // now wait and listen to the holy quran 
      await page.waitForTimeout(80000)

       







      























})// end of test