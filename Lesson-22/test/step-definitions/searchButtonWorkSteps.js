const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const SearchPage = require('../pageobjects/SearchPage');

Given('I am on the website', async () => {
  SearchPage.open();
});

When('I perform a search with query {string}', async (query) => {
  SearchPage.performSearch(query);
});

Then('I should see the search result {string}', async (expectedResult) => {
  const resultText = await SearchPage.getThirdSearchResultText();
  expect(resultText).to.equal(expectedResult);
});