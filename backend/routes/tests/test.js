const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://google.com");
    await driver
      .findElement(By.name("q"))
      .sendKeys("webdriver", Key.RETURN)
      .then(() => {
        driver.findElements(By.className("MjjYud")).then((elements) => {
          elements.forEach((element) => {
            element.getText().then((text) => {
              console.log(text);
            });
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
