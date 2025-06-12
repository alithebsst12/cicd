
import { test, expect, type Page } from '@playwright/test';
import { TIMEOUT } from 'dns/promises';
test('navigatetomSI', async ({ page }) => {

    // login to MSI website
    await page.goto('https://testadmin.msimga.com/CommercialDashboard/Index')
    // wait for 2 seconds 
    await page.waitForTimeout(2000)





















})