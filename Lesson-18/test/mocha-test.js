const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Chrome Driver Tests', function () {
  this.timeout(10000); 

  it('Test 1: Verify Main Title and Chrome Extensions', async function () {
    const options = new chrome.Options();
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

      try {
        await driver.get('https://chromedriver.chromium.org/home');
  
        const mainTitleElement = await driver.findElement(By.css('h1 span'));
        const mainTitleText = await mainTitleElement.getText();
        assert.strictEqual(mainTitleText, 'ChromeDriver');
  
        const additionalMenuLink = await driver.findElement(By.linkText('Дополнительно'));
        await additionalMenuLink.click();
        await driver.sleep(2000);
  
        const chromeExtensionsLink = await driver.findElement(By.linkText('Chrome Extensions'));
        await chromeExtensionsLink.click();
        await driver.sleep(2000);
  
        const newMainTitleElement = await driver.findElement(By.css('h1 span'));
        await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", newMainTitleElement);
        const newMainTitleText = await newMainTitleElement.getText();
        assert.strictEqual(newMainTitleText, 'Chrome Extensions');
      } catch (error) {
        console.error('Error occurred:', error.message);
      } finally {
        await driver.quit();
      }
    });

    it('Test 2: Verify First Link on Google Search', async function () {
      try {
        await driver.get('https://www.google.com/');
        await driver.findElement(By.name('driver')).sendKeys('driver', Key.RETURN);
        await driver.sleep(2000);
        const firstLinkElement = await driver.findElement(By.css('h3.LC20lb.DKV0Md'));
        const firstLinkText = await firstLinkElement.getText();
        assert.ok(firstLinkText.toLowerCase().includes('driver'));
      } catch (error) {
        console.error('Error occurred:', error.message);
      }
    });

  it('Test 3: Verify Mobile Emulation URL', function (done) {
    const options = new chrome.Options();
    const driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    driver.get('https://chromedriver.chromium.org/home')
      .then(() => driver.findElement(By.linkText('Дополнительно')).click())
      .then(() => driver.sleep(2000))
      .then(() => driver.findElement(By.linkText('Mobile Emulation')).click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then((currentUrl) => {
        assert.ok(currentUrl.includes('/mobile-emulation'));
      })
      .catch((error) => {
        console.error('Error occurred:', error.message);
      })
      .finally(() => {
        driver.quit();
        done();
      });
  });
});

