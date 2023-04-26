const express = require("express");
const router = express.Router();
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

router.get("/", async (req, res) => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(
      "https://www.yellowclothing.net/collections/womens-ethnic-tops"
    );
    await driver;

    driver.findElements(By.className("spf-product-card")).then((elements) => {
      let products = [];
      elements.forEach((element) => {
        //   element.getText().then((text) => {
        //     console.log(text);
        //   });
        element
          .findElement(By.className("spf-product-card__title"))
          .getText()
          .then((name) => {
            element
              .findElement(By.className("spf-product-card__price"))
              .getText()
              .then((price) => {
                element
                  .findElement(By.className("spf-product-card__image"))
                  .getAttribute("src")
                  .then((src) => {
                    console.log(src);
                    return src;
                  })
                  .then((src) => {
                    element
                      .findElement(
                        By.className("spf-product-card__image-wrapper")
                      )
                      .getAttribute("href")
                      .then((href) => {
                        console.log(href);
                        return href;
                      })
                      .then((href) => {
                        products.push({
                          name,
                          price,
                          src,
                          href,
                          brand: "Yellow",
                        });
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
  }
});

module.exports = router;
