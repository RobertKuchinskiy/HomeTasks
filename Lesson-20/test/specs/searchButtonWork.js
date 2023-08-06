const { expect } = require('chai');
const SearchPage = require('../pageobjects/SearchPage');

describe('Check search request', async () => {
  before(() => {
    SearchPage.open();
  });

  it('Check search request and find 1st element of list', async () => {
    const query = 'Why Webdriver.IO?';
    SearchPage.performSearch(query);

    const resultText = await SearchPage.getThirdSearchResultText();
    expect(resultText).to.equal(query);
  });
});