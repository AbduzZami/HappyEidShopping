const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(
      "https://infinitymegamall.com/product-category/men/panjabi/"
    );
    await driver;

    driver.findElements(By.className("product_inner")).then((elements) => {
      elements.forEach((element) => {
        element.getText().then((text) => {
          console.log("text");
        });
        element
          .findElement(By.className("woocommerce-loop-product__title"))
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
