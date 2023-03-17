const {Builder, By, Key, util, WebDriver} = require("selenium-webdriver");
 const firefox = require('selenium-webdriver/firefox');

 /* async function example(){
  //let options = new firefox.Options().setBinary(firefox.Channel.NIGHTLY)

   let options = new firefox.Options()
   .setPreference('extensions.firebug.showChromeErrors', true);
    options.binary_location = 'C:\Program Files\Mozilla Firefox\firefox.exe';
     let driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
    await driver.get("https://google.com");
     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
 }
 example();*/

async function registerUser() {
let driver;
    try {
       let options = new firefox.Options()
      .setPreference('extensions.firebug.showChromeErrors', true);
      options.binary_location = 'C:\Program Files\Mozilla Firefox\firefox.exe';

      driver = await new Builder().forBrowser("firefox").build();
      await driver.get('https://magento.softwaretestingboard.com/')

      // Click on the "Create an Account" button
      await driver.findElement(By.linkText('Create an Account')).click();

      // Fill out the registration form
      await driver.findElement(By.id('firstname')).sendKeys('Don');
      await driver.findElement(By.id('lastname')).sendKeys('Van Wyk');
      await driver.findElement(By.id('email_address')).sendKeys('donvw2@gmail.com');
      await driver.findElement(By.id('password')).sendKeys('Password1230');
      await driver.findElement(By.id('password-confirmation')).sendKeys('Password1230');
      await driver.findElement(By.className('submit')).click();

      // Wait for the registration to complete and verify the success message
    //   await driver.wait(until.elementLocated(By.css('.success-msg')), 5000);
    //   const successMsg = await driver.findElement(By.css('.success-msg')).getText();

    //WORKING
    // await driver.findElement(By.linkText('Change Password')).click();

     let url = 'https://magento.softwaretestingboard.com/daphne-full-zip-hoodie.html'
    await driver.findElement(By.id('search')).sendKeys('Daphne Full-Zip Hoodie', Key.RETURN);
    await driver.findElement(By.id('option-label-size-143-item-168')).click();
    await driver.findElement(By.id('option-label-color-93-item-57')).click();
    await driver.findElement(By.linkText('Daphne Full-Zip Hoodie')).click();
    driver.find_element_by_xpath('//a[@href="'+url+'"]')

    // Click on 'Shop Now' button
  await driver.findElement(By.xpath("//a[contains(text(), 'Shop Now')]")).click();

  // Click on 'Hoodies' category
  await driver.findElement(By.xpath("//a[contains(text(), 'Hoodies')]")).click();

      // Select size and color
  await driver.findElement(By.id("attribute92")).sendKeys("L", Key.RETURN);
  await driver.findElement(By.id("attribute173")).sendKeys("Solid Purple", Key.RETURN);

  // Click 'Add to Cart' button
  await driver.findElement(By.id("product-addtocart-button")).click();

  // Verify product price and shipping cost
  const productPrice = await driver.findElement(By.xpath("//span[@class='price'][contains(text(), '$59.00')]"));
  const shippingCost = await driver.findElement(By.xpath("//td[@class='col shipping']//span[contains(text(), '$5.00')]"));
  assert.notEqual(productPrice, null);
  assert.notEqual(shippingCost, null);

  // Click 'Proceed to Checkout' button
  await driver.findElement(By.xpath("//span[contains(text(), 'Proceed to Checkout')]")).click();

  // Fill in billing and shipping information
  await driver.findElement(By.id("billing:firstname")).sendKeys("Janie");
  await driver.findElement(By.id("billing:lastname")).sendKeys("Van Wyk");
  await driver.findElement(By.id("billing:email")).sendKeys("janievw2@gmail.com");
  await driver.findElement(By.id("billing:telephone")).sendKeys("1234567890");
  await driver.findElement(By.id("billing:street1")).sendKeys("123 Main St");
  await driver.findElement(By.id("billing:city")).sendKeys("Anytown");
  await driver.findElement(By.id("billing:region")).sendKeys("California");
  await driver.findElement(By.id("billing:postcode")).sendKeys("12345");
  await driver.findElement(By.id("billing:country_id")).sendKeys("United States", Key.RETURN);
  await driver.findElement(By.id("billing:use_for_shipping_no")).click();

  // Click 'Continue to Shipping Information' button
  await driver.findElement(By.xpath("//span[contains(text(), 'Continue to Shipping Information')]")).click();

  // Select shipping method and click 'Continue to Payment Information' button
  await driver.findElement(By.xpath("//label[contains(text(), '$5.00 - Flat Rate')]")).click();
  await driver.findElement(By.xpath("//span[contains(text(), 'Continue to Payment Information')]")).click();

  // Verify total order amount
  const orderTotal = await driver.findElement(By.xpath("//td[@class='a-right' and contains(text(), '$64.00')]"));
  assert.notEqual(orderTotal, null);


    // await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);

    //   await driver.findElement(By.id('search')).sendKeys('Password123');


    //   await driver.findElement(By.name("q")).sendKeys("Daphne Full-Zip Hoodie", Key.RETURN);
      console.log('Arrived!!!', url);
    } catch(err) {
      console.log(err);
      //await driver.quit();
    }
   }

   registerUser();