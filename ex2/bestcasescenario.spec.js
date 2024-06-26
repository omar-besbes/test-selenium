// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('best case scenario', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('best case scenario', async function() {
    // Test name: best case scenario
    // Step # | name | target | value
    // 1 | open | https://safatelli.github.io/tp-test-logiciel/assets/calc.html | 
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")
    // 2 | setWindowSize | 1440x810 | 
    await driver.manage().window().setRect({ width: 1440, height: 810 })
    // 3 | store | 5 | original_number
    vars["original_number"] = "5"
    // 4 | type | id=num1 | ${original_number}
    await driver.findElement(By.id("num1")).sendKeys(vars["original_number"])
    // 5 | select | id=operator | value=addition
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.css("*[value='addition']")).click()
    }
    // 6 | type | id=num2 | 2
    await driver.findElement(By.id("num2")).sendKeys("2")
    // 7 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 8 | assertText | id=result | Résultat : 7
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 7")
    // 9 | type | id=num1 | 7
    await driver.findElement(By.id("num1")).sendKeys("7")
    // 10 | select | id=operator | value=multiplication
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.css("*[value='multiplication']")).click()
    }
    // 11 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 12 | assertText | id=result | Résultat : 14
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 14")
    // 13 | type | id=num1 | 14
    await driver.findElement(By.id("num1")).sendKeys("14")
    // 14 | select | id=operator | value=subtraction
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.css("*[value='subtraction']")).click()
    }
    // 15 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 16 | assertText | id=result | Résultat : 12
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 12")
    // 17 | type | id=num1 | 12
    await driver.findElement(By.id("num1")).sendKeys("12")
    // 18 | select | id=operator | value=division
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.css("*[value='division']")).click()
    }
    // 19 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 20 | assertText | id=result | Résultat : 6
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 6")
    // 21 | type | id=num1 | 6
    await driver.findElement(By.id("num1")).sendKeys("6")
    // 22 | type | id=num2 | ${original_number}
    await driver.findElement(By.id("num2")).sendKeys(vars["original_number"])
    // 23 | select | id=operator | label=-
    {
      const dropdown = await driver.findElement(By.id("operator"))
      await dropdown.findElement(By.xpath("//option[. = '-']")).click()
    }
    // 24 | click | css=button | 
    await driver.findElement(By.css("button")).click()
    // 25 | assertText | id=result | Résultat : 1
    assert(await driver.findElement(By.id("result")).getText() == "Résultat : 1")
  })
})
