
import { test, expect, type Page } from '@playwright/test';
import { TIMEOUT } from 'dns/promises';
test('navigatetothenikewebsite', async ({ page }) => {

    
    let option = ['nike']
    option.push('jordan')
    
    for(let i = 0 ; i < option.length ; i++) {
    // loginto the nike webiste
    await page.goto("https://www.nike.com");
    // wait for 5 seconds
    await page.waitForTimeout(5000)
    // now verify the url is correct 
    await expect(page).toHaveURL("https://www.nike.com")
    // now verify title is correct 
    await expect(page).toHaveTitle("Nike. Just Do It. Nike.com")
    // now hover over the men button 
    await page.locator("xpath = (//*[text() = 'Men'])[2]").hover({timeout:4000})
    // wait for 5 seconds
    await page.waitForTimeout(5000)
    // now click on men and wait 4 seconds 
    await page.locator("xpath = (//*[text() = 'Men'])[2]").click({timeout:4000})
    // wait for 5 seconds
     await page.waitForTimeout(4000)
    // Tester should click on the search field 
    await page.locator("xpath = //*[@aria-label = 'Search Products']").fill(option[i])
    // wait for 5 seconds
    await page.waitForTimeout(8000)
    // store in a placeholder using let command 
    let choices await page.locator('xpath = //*[@id="gen-nav-commerce-header-v2"]/nav/header/div/div/div[3]/div/search/form/div/div[4]/div/section/div/ul/li[1]/a/figure/div[2]/div[1]/h1').click({timeout:3000})
    // wait for 5 seconds
    await page.waitForTimeout(4000)
  




































    }// end of for loop

})