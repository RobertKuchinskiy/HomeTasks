const { expect } = require('chai');
const VersionPage = require('../pageobjects/VersionPage');

describe('Test navigation on https://webdriver.io/', function () {
  it('should navigate on Versions | WebdriverIO', async () => {
    VersionPage.open();

    const expectedTitle = 'Versions | WebdriverIO';
    await browser.waitUntil(async () => {
      const currentTitle = await VersionPage.getTitle();
      return currentTitle === expectedTitle;
    }, { timeout: 10000, timeoutMsg: 'Expected title to be ' + expectedTitle });

    const currentTitle = await VersionPage.getTitle();
    expect(currentTitle).to.equal(expectedTitle);
  });
});