var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
// make sure chrome driver can be found on your system PATH
var chromedriverPath  = "E:\\chromedriver.exe";
process.env.CHROME_DRIVER_PATH = chromedriverPath;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.withCapabilities(webdriver.Capabilities.chrome())
	.build();

//driver.get('https://in.news.yahoo.com/national').then(function() {
driver.get('http://scrollmagic.io/examples/advanced/infinite_scrolling.html').then(function() {
	driver.manage().timeouts().implicitlyWait(1000 * 3);
}).then(function() {
	console.log('Entered');
	var check = 0, count = 0;
	for(var i = 0; i< 20; i++) {
		driver.sleep( 1000 * 5 );
		var dynamicscroll = 'var dynamicscroll = document.documentElement.scrollHeight;'+
							'window.scrollTo(0, dynamicscroll);'+
							'return dynamicscroll;';
		driver.executeScript(dynamicscroll).then( function(height) {
			console.log('Check : '+check+'  Height : '+height +'  Repeated : '+(count++));
			if(check === 0 || check !== height){
				console.log('continue'); check = height;
			} else {
				console.log('break'); i = 100;
			}
		});
	} // End of For loop.
}).then(null, function(err) {
	console.error("An error was thrown! By Promise..." + err);
});

driver.quit();