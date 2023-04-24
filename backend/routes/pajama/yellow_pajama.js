const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.yellowclothing.net/collections/mens-pajama");
    await driver;

    driver.findElements(By.className("spf-product-card")).then((elements) => {
      console.log(elements.length);
      elements.forEach((element) => {
        element
          .findElement(By.className("spf-product-card__title"))
          .then((element) => {
            element.getText().then((text) => {
              console.log(text);
            });
          });
      });
      setTimeout(async () => {
        await driver.quit();
      }, 10000);
    });
  } catch (error) {
    console.log(error);
  }
}

example();
