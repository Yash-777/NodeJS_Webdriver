https://github.com/Yash-777/SeleniumSource/tree/master/javascript/node/selenium-webdriver
https://www.npmjs.com/package/selenium-webdriver


# NodeJS_Webdriver

This module provides an easy and simple way to export [`package.json`](https://www.npmjs.com/package/package) data.

npm install selenium-webdriver and chromedriver version « https://docs.npmjs.com/cli/shrinkwrap

```
===== ----- =====
$ npm install package

npm install selenium-webdriver

npm install -g selenium-webdriver

npm install --save selenium-webdriver@2.53.1
===== ----- =====
```

	Above says that selenium-webderiver is going to be downloaded into "node-modules" folder 
	and that should be placed on your system PATH.

Custom binaries url « https://www.npmjs.com/package/chromedriver
To use a mirror of the ChromeDriver binaries use npm config property chromedriver_cdnurl. Default is http://chromedriver.storage.googleapis.com.

===== ----- =====
npm install --save chromedriver@2.23
===== ----- =====

* {WorkSpace}\WebdriverJS\node_modules\selenium-webdriver\chrome.js - replace the these text.

===== ----- =====
	var path = require('path')
	var binPath = require(path.join(__dirname, '../chromedriver', 'lib', 'chromedriver')).path
	
	const CHROMEDRIVER_EXE = "D:/Yashwanth/D Drive/YashGt/WebdriverJS/node_modules/selenium-webdriver/chromedriver.exe"
		//binPath;
		//process.platform === 'win32' ? 'chromedriver.exe' : 'chromedriver';
===== ----- =====

## Usage

var package = require('package')(module); // contains package.json data.
var yourAwesomeModule = {};
yourAwesomeModule.version = package.version;

Running with Selenium WebDriver « https://www.npmjs.com/package/chromedriver
```
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
```

 
## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
