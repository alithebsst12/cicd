import { test, expect, type Page } from '@playwright/test';


test('navigatetogtawebsite', async ({ page }) => {


    // go on the rockstar website

    await page.goto('https://www.rockstargames.com/gta-v');

    await expect (page).toHaveURL('https://www.rockstargames.com/gta-v')

       
    await page.waitForTimeout(6000);


    await expect (page).toHaveTitle('Grand Theft Auto V - Rockstar Games')

   
    await page.waitForTimeout(6000);
    

    // wait 6 seconds

    await page.waitForTimeout(6000);


    await page.locator('xpath = //*[@class = "a69f93a42729f8a8c895"]').click({timeout: 3000});


      // wait 6 seconds

    await page.waitForTimeout(6000);


    await page.locator('xpath = //*[@data-gtm-action = "Main Nav Click"]').nth(6).click({timeout : 3000})


     // wait 6 seconds

    await page.waitForTimeout(6000);



       await page.goto('https://socialclub.rockstargames.com');




    await page.bringToFront
     // wait 6 seconds

    await page.waitForTimeout(6000);



    await page.locator('xpath = //*[@class = "UI__Button-socialclub__btn UI__Button-socialclub__primary UI__Button-socialclub__large"]').click({timeout:3000})

     
     // wait 6 seconds

    await page.waitForTimeout(6000);


    await page.close()

     // wait 6 seconds

     await page.waitForTimeout(10000);














     // wait 6 seconds

    await page.waitForTimeout(6000);





    // now click on menue

    // now scroll by pixells

  //  await page.mouse.wheel(0,2000);


     // wait 6 seconds

   //  await page.waitForTimeout(6000);

     // now cllick on gta 5

   //  await page.locator('xpath = //*[@class = "dc8c683c436f74586e7b a1b95a9bde496a003c95"]').nth(3).click({timeout:8000})




    
     // wait 6 seconds

   //  await page.waitForTimeout(8000);





















})// end of test
