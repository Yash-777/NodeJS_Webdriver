var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
	
	
var driver = new webdriver
			.Builder()
			.usingServer()
			.withCapabilities({'browserName': 'chrome' })
			.build();

driver.get('demo.opencart.com/index.php?route=account/login').then(function(){
    driver.sleep( 1000 * 10 );
    driver.manage().timeouts().setScriptTimeout(30000);
});

driver.quit();