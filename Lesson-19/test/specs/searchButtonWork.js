const { remote } = require('webdriverio');
const { expect } = require('chai');

  describe('Check search request', async () => {

    before(async () => {
      await browser.url('https://webdriver.io/');
    });
 
    it('Check ssearch request and find 1st element of list', async () => {
      const searchField = await $('span.DocSearch-Button-Container');
      await searchField.waitForEnabled();
      await searchField.click();
      const searchInput = await $('form.DocSearch-Form input');
      await searchInput.waitForEnabled();
      await searchInput.setValue('Why Webdriver.IO?');
      const thirdSearchOutput = await $('#docsearch-item-0 span.DocSearch-Hit-title');
      await thirdSearchOutput.waitForEnabled();
      expect(await thirdSearchOutput.getText()).to.equal('Why Webdriver.IO?')
    });
});
