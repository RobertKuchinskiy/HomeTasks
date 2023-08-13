const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const VersionPage = require('../pageobjects/VersionPage');

Given('I am on the website', async () => {
  VersionPage.open();
});

When('I navigate to the versions page', async () => {
  VersionPage.getStartedButton.click();
  VersionPage.oldDocsLink.waitForDisplayed();
  VersionPage.oldDocsLink.click();
});

Then('I should see the title {string}', async (expectedTitle) => {
  await browser.waitUntil(async () => {
    const currentTitle = await VersionPage.getTitle();
    return currentTitle === expectedTitle;
  }, { timeout: 10000, timeoutMsg: 'Expected title to be ' + expectedTitle });

  const currentTitle = await VersionPage.getTitle();
  expect(currentTitle).to.equal(expectedTitle);
});