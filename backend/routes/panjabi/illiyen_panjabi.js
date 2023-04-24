const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(
      "https://ilyn.global/category/panjabi-639#{%22item_per_page%22:40,%22page%22:1,%22public_category_ids%22:%22[]%22,%22public_category_id%22:639,%22min_price%22:0,%22max_price%22:7950,%22color_ids%22:%22[]%22,%22size_ids%22:%22[]%22,%22sort%22:%22%22,%22change_event%22:%22%22}"
    );
    await driver;

    driver.findElements(By.className("product-card")).then((elements) => {
      console.log(elements.length);
      elements.forEach((element) => {
        
        element
          .findElement(By.className("product-card-title"))
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
