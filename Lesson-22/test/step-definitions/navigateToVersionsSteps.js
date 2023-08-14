const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const VersionPage = require('../pageobjects/VersionPage');

Given(/^I open the website$/, () => {
    VersionPage.open();
});

When(/^I navigate to the old versions$/, async () => {
    VersionPage.openOldVersions();

    browser.pause(2000);

    const currentTitle = await VersionPage.getTitle();
    console.log('Current Title:', currentTitle);
});

Then(/^I should see the title "([^"]*)"$/, async (expectedTitle) => {
  await browser.waitUntil(async () => {
    const currentTitle = await VersionPage.getTitle();
    return currentTitle === expectedTitle;
}, {
    timeout: 20000, 
    timeoutMsg: `Expected title to be ${expectedTitle}`
});

    const currentTitle = await VersionPage.getTitle();
    expect(currentTitle).to.equal(expectedTitle);
});