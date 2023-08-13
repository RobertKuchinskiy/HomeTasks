class VersionPage {
    get getStartedButton() {
      return $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]');
    }
  
    get oldDocsLink() {
      return $('a[href="/versions"]');
    }
  
    getTitle() {
      return browser.getTitle();
    }
  
    open() {
      browser.url('https://webdriver.io/');
      this.getStartedButton.waitForDisplayed();
      this.getStartedButton.click();
      browser.pause(1000);
      this.oldDocsLink.waitForDisplayed();
      this.oldDocsLink.click();
      browser.pause(1000);
    }
  }
  
  module.exports = new VersionPage();