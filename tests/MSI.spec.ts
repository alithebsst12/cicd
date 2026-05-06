
import { test, expect, type Page } from '@playwright/test';

test('navigatetomSI', async ({ page }) => {

    // login to MSI website
    await page.goto('https://testadmin.msimga.com/CommercialDashboard/Index')
     // wait for 4 seconds 
     await page.waitForTimeout(4000)

    // wait for 3 seconds 
    await page.waitForTimeout(3000)
    // now store the username and pw
    let USername = 'qetechSolutions@msiqe.com'
    let pw = 'JYPlAnIkDITGTkQeVULQyYJWkImoHlQE'
    // now enter username 
    await page.locator("xpath = //*[@id = 'LoginName']").click({timeout:3000})
    await page.locator("xpath = (//*[@class = 'form-control'])[1]").fill(USername)
    // wait for 3 seconds 
    await page.waitForTimeout(8000)

    // enter pw
    await page.locator("xpath = (//*[@class = 'form-control'])[2]").fill(pw)
    // wait for 3 seconds 
    await page.waitForTimeout(8000)

    // now click on sign in 
    await page.locator("xpath = //*[text() = 'Sign in']").click({timeout:3000})
    // wait for 5 seconds 
    await page.waitForTimeout(5000)

    // now click on new quote dropdown menu
    await page.locator("xpath = //*[contains(text(), 'New Quote')]").click({timeout:7000})
    // wait for 5 seconds 
    await page.waitForTimeout(7000)
    await page.locator("xpath = (//*[text()= 'Commercial Habitational'])[1]").click({timeout:10000})
     // wait for 5 seconds 
     await page.waitForTimeout(10000)

     //rvebvrbtb rdfsvds
     //
    //4tbtrb5tyrntnynrvrtvrvrverveervtv
    //rgt5rbtynvfvfvfvgf

































})