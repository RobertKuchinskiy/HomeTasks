const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const HomePage = require('../pageobjects/HomePage');

Given('I am on the website', async () => {
  HomePage.open();
});

Then('I should see the title including {string}', async (expectedText) => {
  const title = await HomePage.title;
  expect(title).to.include(expectedText);
});

Then('I should see the svg image displayed', async () => {
  const imageElement = await HomePage.svgImage;
  expect(await imageElement.isDisplayed()).to.be.true;
});

Then('I should see the active navbar link displayed', async () => {
  const activeNavLink = await HomePage.activeNavLink;
  expect(await activeNavLink.isDisplayed()).to.be.true;
});