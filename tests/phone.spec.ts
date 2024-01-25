import { test, expect, type Page } from '@playwright/test';

test('navigatetonikewebsite', async ({ page }) => {


  
await page.goto("https://www.demoblaze.com")

await page.waitForTimeout(3000);

// click on first option 

await page.locator("xpath = //*[@class =  'hrefch']").nth(0).click({timeout: 3000});
// wait for 3 secos

await page.waitForTimeout(3000);
// now add to the cart


await page.locator("xpath = //*[text()=  'Add to cart']").click({timeout: 3000});
// wait for 3 secons

await page.waitForTimeout(3000);

// now click on home


await page.locator("xpath = //*[@class = 'nav-link']").nth(0).click({timeout: 3000});

await page.waitForTimeout(3000);

// now click on second option


await page.locator("xpath = //*[@class =  'hrefch']").nth(1).click({timeout: 3000});
// wait for 3 secos
 
await page.waitForTimeout(3000);
// now add to the cart
 

await page.locator("xpath = //*[text()=  'Add to cart']").click({timeout: 3000});
// wait for 3 seconds

await page.waitForTimeout(3000);

// now click on cart

await page.locator("xpath = //*[text()= 'Cart']").click({timeout: 3000});
// wait for 3 secons

await page.waitForTimeout(3000);

// now click on place my order

await page.locator("xpath = //*[text()= 'Place Order']").click({timeout: 3000});
// wait for 3 secons

await page.waitForTimeout(3000);

let myText = await page.locator("xpath = //*[text()=  'Total: 1180']").textContent({timeout: 3000});

// now print out the statement 

console.log("my new text is " + myText);











































})// end of test









