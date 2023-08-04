const { remote } = require('webdriverio');
const { expect } = require('chai');

  describe('Test navigation on https://webdriver.io/', function () {
    it('should navigate on Versions | WebdriverIO', async () => {
      await browser.url('https://webdriver.io/');
  
      const getStartedButton = await $('.button.getStarted_Sjon');
      await getStartedButton.waitForDisplayed();
      await getStartedButton.click();
      await browser.pause(1000);

     const oldDocsLink = await $('a[href="/versions"]');
    await oldDocsLink.waitForDisplayed();
    await oldDocsLink.click();
    await browser.pause(1000);

    const expectedTitle =  'Versions | WebdriverIO';
    const currentTitle = await browser.getTitle();
    expect(currentTitle).to.equal(expectedTitle);
  });
});
