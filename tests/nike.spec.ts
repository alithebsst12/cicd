import { test, expect, type Page } from '@playwright/test';

// navigate to nike website



test.describe('test', async () => {
    let page: Page;
    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
    });

test('navigatetonikewebsite', async ({ page }) => {


// make a list of songs

let songs = ["taha by sherih mustafa"];

songs.push("sura yaseen")


    // navagte to nike

   for(let i=0 ; i<songs.length; i++){


    await page.goto("https://www.youtube.com");

    await page.waitForTimeout(2000)


    await expect (page).toHaveURL('https://www.youtube.com')


    await page.waitForTimeout(2000)



    await expect (page).toHaveTitle('YouTube')
  
    await page.waitForTimeout(2000)

   // click on search field

   await page.locator("xpath =//*[@id = 'search']").nth(2).click({timeout:10000})

   await page.waitForTimeout(2000)


   await expect (page.locator("xpath =//*[@id = 'search']").nth(2)).toBeVisible()



   await page.waitForTimeout(2000)

   






   


   

   // type on search field


   await page.locator("xpath =//*[@id = 'search']").nth(2).fill( songs[i]),({timeout : 10000})


   await page.waitForTimeout(2000)

   // click on search field

   await page.locator("xpath = //*[@class = 'style-scope ytd-searchbox']").nth(6).click({timeout :10000})

   await page.waitForTimeout(2000)


   // now click on the song

   await page.locator("xpath =//*[@class = 'style-scope ytd-video-renderer']").nth(2).click({timeout:10000})

   await page.waitForTimeout(5000)


   



  

  


}// end of loop


})// end of test

})// end of test sequence