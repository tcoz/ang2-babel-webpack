require('!!script!core-js/client/shim.js');

require('!!script!zone.js/dist/zone.js');
require('!!script!reflect-metadata/temp/Reflect.js');

require('!!script!rxjs/bundles/Rx.js');
require('!!script!@angular/core/bundles/core.umd.js');
require('!!script!@angular/common/bundles/common.umd.js');
require('!!script!@angular/compiler/bundles/compiler.umd.js');
require('!!script!@angular/platform-browser/bundles/platform-browser.umd.js');
require('!!script!@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js');

require("!style!css!./styles.css");
require('./app/main');
