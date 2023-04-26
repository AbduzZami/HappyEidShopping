const express = require("express");
const router = express.Router();
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

router.get("/", async (req, res) => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.aarong.com/catalogsearch/result/?q=Shalwar");
    await driver;

    driver.findElements(By.className("product-item-info")).then((elements) => {
      let products = [];
      elements.forEach((element) => {
        //   element.getText().then((text) => {
        //     console.log(text);
        //   });
        element
          .findElement(By.className("product-item-link"))
          .getText()
          .then((name) => {
            element
              .findElement(By.className("price"))
              .getText()
              .then((price) => {
                element
                  .findElement(By.className("product-image-photo"))
                  .getAttribute("src")
                  .then((src) => {
                    console.log(src);
                    return src;
                  })
                  .then((src) => {
                    element
                      .findElement(By.className("product-item-link"))
                      .getAttribute("href")
                      .then((href) => {
                        console.log(href);
                        return href;
                      })
                      .then((href) => {
                        products.push({ name, price, src, href, "brand" : "arong" });
                      });
                  });
              });
          });
      });
      setTimeout(async () => {
        await driver.quit();
        res.status(200).json(products);
      }, 3000);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  } onerror (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
