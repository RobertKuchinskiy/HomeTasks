const { remote } = require('webdriverio');
const { expect } = require('chai');

describe('Тестирование https://webdriver.io/', function () {
  let browser;

  before(async () => {
    browser = await remote({
      capabilities: {
        browserName: 'chrome', 
      },
    });
  });

  after(async () => {
    await browser.deleteSession();
  });

  it('Test 1: Check Page Title', async () => {
    await browser.url('https://webdriver.io/');
    const title = await browser.getTitle();
    assert.include(title, 'WebdriverIO');
  });

  
  it('Test 2: Check svg on main page: "svg_j3ED"', async () => {
    await browser.url('https://webdriver.io/');

    const imageElement = await browser.$('.svg_j3ED');
    assert(await imageElement.isDisplayed(), 'Картинка с классом "svg_j3ED" отображается на странице');
  });

  it('Test 3: Verify Page Title', function () {
    browser.url('https://webdriver.io/');
    const pageTitle = browser.getTitle();
    expect(pageTitle).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });

  it('Test 4: Verify Documentation Link', function () {
    browser.url('https://webdriver.io/');
    const documentationLink = $('a=Documentation');
    expect(documentationLink.isDisplayed()).to.be.true;
  });

  it('Test 5: Verify Search Functionality', function () {
    browser.url('https://webdriver.io/');
    const searchInput = $('[name="search_query"]');
    searchInput.setValue('selenium');
    browser.keys('Enter');
    const searchResults = $$('.search-results-content .docSearch-item');
    expect(searchResults.length).to.be.above(0);
  });
});





