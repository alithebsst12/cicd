import { test, expect, type Page } from '@playwright/test';
test('navigatetonikewebsite', async ({ page }) => {

    

    // make a list of songs and store them in a placeholder


    let options = ["Ahmad Khedr Surah Waqiah"]
    options.push("surah mulk by ahmed khedar")
    options.push("surah mariyam by ahmed khedar")
  
    // now create a forloop
    for(let i= 0; i<options.length;i++){
      // Navigate to the youtube website
    await page.goto('https://www.youtube.com')
    // wait 3 seconds 
    await page.waitForTimeout(3000)
    // click on the search bar
    await page.locator('xpath= //*[contains(@name, "search_query")]').click({timeout:2000})
    // wait 3 seconds 
    await page.waitForTimeout(3000)
    // type on the search box
    // click on the search bar
    await page.locator("//*[@type = 'text']").fill(options[i])
    // wait 3 seconds 
    await page.waitForTimeout(3000)
    // now click on enter 
    await page.locator("xpath = //button[@title='Search']//yt-icon//div").click({timeout:5000})
    // wait 8 seconds 
    await page.waitForTimeout(8000)
    // now enjoy 
    await page.locator("//*[@id = 'video-title']").nth(2).click({timeout:2000})
    // wait 10 seconds 
    await page.waitForTimeout(100000)

  













    }// end of forloop
})// end of test