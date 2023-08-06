class SearchPage {
    get searchField() {
      return $('span.DocSearch-Button-Container');
    }
  
    get searchInput() {
      return $('form.DocSearch-Form input');
    }
  
    get thirdSearchOutput() {
      return $('#docsearch-item-0 span.DocSearch-Hit-title');
    }
  
    open() {
      browser.url('https://webdriver.io/');
    }
  
    performSearch(query) {
      this.searchField.waitForEnabled();
      this.searchField.click();
      this.searchInput.waitForEnabled();
      this.searchInput.setValue(query);
      this.thirdSearchOutput.waitForEnabled();
    }
  
    getThirdSearchResultText() {
      return this.thirdSearchOutput.getText();
    }
  }
  
  module.exports = new SearchPage();