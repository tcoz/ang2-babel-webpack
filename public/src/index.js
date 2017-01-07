require('!!script!core-js/client/shim.js');

/**
 * Polyfill is needed to implement 2015+ generators.
 * Polyfill MUST load before zone.js, or zone.js promises will be overwritten
 * and throw very nasty app crashing error.
 */
require('!!script!babel-polyfill/dist/polyfill.js');

/**
 * Zone enables a sort of 'tick' for bindings, databinding won't work without it.
 * It's kind of the new $digest (Angular 2 does not have the old $digest).
 */
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
