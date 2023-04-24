const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://catseye.com.bd/eid-collection/panjabi.html");
    await driver;

    driver.findElements(By.className("product-item")).then((elements) => {
      console.log(elements.length);
      elements.forEach((element) => {
        element
          .findElement(By.className("product-item-name"))
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
