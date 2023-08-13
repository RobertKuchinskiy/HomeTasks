const { expect } = require('chai');
const HomePage = require('../pageobjects/HomePage');

describe('Тестирование https://webdriver.io/', function () {
  before(() => {
    HomePage.open();
  });

  it('Test 1: Check Page Title', async () => {
    const title = await HomePage.title;
    expect(title).to.include('WebdriverIO');
  });

  it('Test 2: Check svg on main page: "svg_j3ED"', async () => {
    const imageElement = await HomePage.svgImage;
    expect(await imageElement.isDisplayed(), 'Картинка с классом "svg_j3ED" отображается на странице').to.be.true;
  });

  it('Test 3: Verify Active Navbar Link', async () => {
    const activeNavLink = await HomePage.activeNavLink;
    expect(await activeNavLink.isDisplayed(), 'Активная ссылка навигации отображается на странице').to.be.true;
  });
});