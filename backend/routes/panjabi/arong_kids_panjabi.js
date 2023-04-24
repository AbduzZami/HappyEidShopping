const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.aarong.com/kids/boys-ages-8-15/panjabi");
    await driver;

    driver.findElements(By.className("product-item-info")).then((elements) => {
      elements.forEach((element) => {
        //   element.getText().then((text) => {
        //     console.log(text);
        //   });
        element
          .findElement(By.className("product-item-link"))
          .getText()
          .then((text) => {
            console.log(text);
          });
      });
      setTimeout(async () => {
        await driver.quit();
      }, 5000);
    });
  } catch (error) {
    console.log(error);
  }
}

example();
