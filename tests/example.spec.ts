import { test, expect, TestInfo } from '@playwright/test';
import { label, attachment } from "allure-js-commons";  //--- 05/08/2024, Test by Robot
import { link, issue } from "allure-js-commons";
import { basename } from 'path';
//import { allure } from "allure-playwright";
//import { AllureReporter } from "allure-playwright";
//--- 2024-08-15, Test for push project to git
//--- 2024-08-17, Add Allure-option
//--- 2024-08-26, Testing for PR

test('has title', async ({ page }, TestInfo) => {
  await page.goto('https://playwright.dev/');
  // await page.waitForLoadState('load', {timeout: 30000});
  // await page.waitForLoadState('load', {timeout: 60000});  //--- 2024-08-15, Test for push project to git
  await page.waitForLoadState('load', {timeout: 30000});  //--- 2024-08-17, Add Allure-option

  //await allure.attachment("search-results.png", await page.screenshot(), {
  //await attachment("By Robot search-results.png", await page.screenshot(), {
  let testCaseCapt = TestInfo.title + '.png';
  await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
  });
  TestInfo.attach('Robot_Test', {body: 'rBot_Body'});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  //await expect(page).toHaveTitle(/Playwright-rBot/);

  //--- 05/08/2024
  await label("labelName", "At has title with labelValue");
  console.log('Robot has title => ' + 'allure.');
});

test('get started link', async ({ page }, TestInfo) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('load', {timeout: 30000});
  
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  //await page.waitForLoadState('load', {timeout: 30000});
  
  // await allure.attachment("search-results.png", await page.screenshot(), {
  let testCaseCapt = TestInfo.title + '.png';
  //await attachment("By Robot, started-link.png", await page.screenshot(), {
  await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
  });
  TestInfo.attach('Robot_Test2', {body: 'rBot_Body2'});

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Installation-rBot' })).toBeVisible();

  //--- 05/08/2024, By Robot
  await issue("Issue Name", "https://github.com/allure-framework/allure-js/issues/352");
  console.log('Robot get started link => ' + 'allure.');
});



