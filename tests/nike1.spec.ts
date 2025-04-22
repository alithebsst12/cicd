
import { test, expect, type Page } from '@playwright/test';
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
    await page.locator("xpath = //*[@aria-label = 'Search Products']").fill(option[0])
    // wait for 5 seconds
    await page.waitForTimeout(8000)


    if(i==0){
        let name = await page.locator("xpath = //*[@class = 'nds-text title css-196t8ag e1yhcai00 appearance-body1Strong color-primary weight-medium']")

        name.nth(1).click({timeout:10000})
        // wait for 5 seconds
     await page.waitForTimeout(10000)


    }



    // now capture text 

    let text = await page.locator("xpath = (//*['#pdp_product_subtitle'])[2806]").textContent({timeout :3000})
    // wait for 5 seconds
    await page.waitForTimeout(4000)
    console.log("my new message is " + text)
     // wait for 5 seconds
     await page.waitForTimeout(4000)
     //grgt






































    }// end of for loop

})