var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
	
var driver = new webdriver
			.Builder()
			.usingServer()
			.withCapabilities({'browserName': 'chrome' })
			.build();

//driver.get('https://groups.google.com/forum/#!search/webdriverjs').then(function(){
driver.get('http://scrollmagic.io/examples/advanced/infinite_scrolling.html').then(function(){
	driver.sleep( 1000 * 10 );
	driver.manage().timeouts().setScriptTimeout( 1000 * 30 );
	//driver.manage().timeouts().implicitlyWait(1000 * 3);
});

function scrollBottom() {
	var count = arguments[arguments.length - 2] || 0x7fffffff;
	var callback = arguments[arguments.length - 1];
	var timeout = 1000 * 10; /* timeout in seconds */
	var i = 0;

	/* get the scrollable container */
	var elm = document.elementFromPoint(window.innerWidth - 25, window.innerHeight / 2);
	for ( ;elm && (++elm.scrollTop, !elm.scrollTop); elm=elm.parentElement);
	elm = elm || document.documentElement;

	/* scroll while the height is increasing or until timeout */
	(function scroll() {
		var endtime = Date.now() + timeout;
		var height = elm.scrollHeight;
		elm.scrollTop = 0x7fffffff;	/* scroll */
		
		setTimeout(function check() {
			if (Date.now() > endtime) { /* returns if waited more than 5 sec */
				callback(i);
			} else if (elm.scrollHeight == height) { /* wait again if same height	*/
				setTimeout(check, 60);
			} else if (++i === count) { /* returns if scrolled the expected count */
				callback(i);
			} else { /* scroll again */
				setTimeout(scroll, 60);
			}
		}, 250);
	})();
}

// scroll to the bottom 3 times
driver.executeAsyncScript(scrollBottom, 3).then(n => console.log(`3 scrolled ${n} time(s)`));

// scroll to the bottom until the end
driver.executeAsyncScript(scrollBottom).then(n => console.log(`scrolled ${n} time(s)`));

driver.quit();