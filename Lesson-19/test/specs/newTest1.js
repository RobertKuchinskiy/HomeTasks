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
    expect(title).to.include('WebdriverIO');
  });

  it('Test 2: Check svg on main page: "svg_j3ED"', async () => {
    await browser.url('https://webdriver.io/');

    const imageElement = await browser.$('.svg_j3ED');
    expect(await imageElement.isDisplayed(), 'Картинка с классом "svg_j3ED" отображается на странице').to.be.true;
  });

  it('Test 3: Verify Active Navbar Link', async () => {
    await browser.url('https://webdriver.io/');
    const activeNavbarLink = await browser.$('.navbar__item.navbar__link.navbar__link--active');
    expect(await activeNavbarLink.isDisplayed(), 'Активная ссылка навигации отображается на странице').to.be.true;
  });

  it('Test 4: Verify Search Functionality', async () => {
    await browser.url('https://webdriver.io/');
    const searchInput = await $('[name="search_query"]');
    expect(await searchInput.waitForDisplayed(), 'Поле поиска отображается на странице').to.be.true;
    await searchInput.setValue('selenium');
    browser.keys('Enter');
    const searchResults = await $$('.search-results-content .docSearch-item');
    expect(searchResults.length).to.be.above(0);
  });
});







