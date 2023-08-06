const { expect } = require('chai');
const VersionPage = require('../pageobjects/VersionPage');

describe('Test navigation on https://webdriver.io/', function () {
  it('should navigate on Versions | WebdriverIO', async () => {
    VersionPage.open();

    const expectedTitle =  'Versions | WebdriverIO';
    const currentTitle = await VersionPage.getTitle();
    expect(currentTitle).to.equal(expectedTitle);
  });
});