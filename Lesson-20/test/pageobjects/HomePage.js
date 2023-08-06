class HomePage {
    get title() {
      return browser.getTitle();
    }
  
    get svgImage() {
      return $('.svg_j3ED');
    }
  
    get activeNavLink() {
      return $('a.navbar__item.navbar__link[href="/docs/api"]');
    }
  
    open() {
      browser.url('https://webdriver.io/');
    }
  }
  
  module.exports = new HomePage();