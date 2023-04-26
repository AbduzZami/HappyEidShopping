const express = require("express");
const router = express.Router();
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

router.get("/", async (req, res) => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.apex4u.com/women");
    await driver;

    // driver.executeScript("window.scrollTo(0, 10000)");
    driver.findElements(By.className("bucket_left")).then((elements) => {
      let products = [];
      elements.forEach((element) => {
        //   element.getText().then((text) => {
        //     console.log(text);
        //   });
        element
          .findElement(By.className("mtb-title"))
          .getText()
          .then((name) => {
            console.log(name);
            element
              .findElement(By.className("sp_amt"))
              .getText()
              .then((price) => {
                console.log(price);
                element
                  .findElement(By.className("mtb-img"))
                  .getAttribute("src")
                  .then((src) => {
                    console.log(src);
                    return src || "";
                  })
                  .then((src) => {
                    element
                      .findElement(By.css("a"))
                      .getAttribute("href")
                      .then((href) => {
                        console.log(href);
                        return href || "";
                      })
                      .then((href) => {
                        console.log(href);
                        products.push({
                          name,
                          price,
                          src,
                          href,
                          brand: "Apex",
                        });
                      });
                  });
              });
          });
      });
      setTimeout(async () => {
        await driver.quit();
        console.log(products);
        res.status(200).json(products);
      }, 10000);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
