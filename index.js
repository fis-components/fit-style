(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bootstrap/dist/css/bootstrap.css"), require("font-awesome/css/font-awesome.css"));
	else if(typeof define === 'function' && define.amd)
		define(["bootstrap/dist/css/bootstrap.css", "font-awesome/css/font-awesome.css"], factory);
	else if(typeof exports === 'object')
		exports["fit-style"] = factory(require("bootstrap/dist/css/bootstrap.css"), require("font-awesome/css/font-awesome.css"));
	else
		root["fit-style"] = factory(root["bootstrap/dist/css/bootstrap.css"], root["font-awesome/css/font-awesome.css"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./all.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./all.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  line-height: 1.42857143;\n  color: #58666e; }\n\n@font-face {\n  font-family: 'anticon';\n  src: url(" + __webpack_require__(7) + ");\n  /* IE9*/\n  src: url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(9) + ") format(\"truetype\"), url(" + __webpack_require__(10) + "#iconfont) format(\"svg\");\n  /* iOS 4.1- */ }\n\n.row {\n  margin: 0; }\n\nlabel {\n  margin: 0; }\n\n.form-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.form-container label {\n  white-space: nowrap; }\n\n.btn {\n  display: inline-block;\n  font-weight: 500;\n  border-radius: 2px;\n  outline: 0 !important;\n  border: 1px solid transparent;\n  line-height: 1.42857143;\n  white-space: nowrap;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .btn.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n    box-shadow: none;\n    opacity: .65; }\n\n.btn-lg {\n  padding: 0.65rem 1.05rem; }\n\n.btn-xs {\n  padding: 0.15rem .75rem; }\n\n.btn-sm {\n  padding: 0 .65rem; }\n\n.btn-link {\n  color: #58666e; }\n  .btn-link.active {\n    box-shadow: none; }\n\n.btn-default {\n  color: #58666e;\n  background-color: #fcfdfd;\n  border-color: #dee5e7;\n  background-color: #fff;\n  border-bottom-color: #d8e1e3;\n  box-shadow: 0 1px 1px rgba(90, 90, 90, 0.1); }\n  .btn-default:hover {\n    color: #58666e;\n    background-color: #edf1f2;\n    border-color: #c7d3d6; }\n  .btn-default:focus, .btn-default.focus {\n    color: #58666e;\n    background-color: #edf1f2;\n    border-color: #c7d3d6; }\n  .btn-default:active, .btn-default.active, .btn-default:hover, .btn-default:focus, .btn-default.focus, .btn-default:active:focus,\n  .open > .btn-default.dropdown-toggle {\n    color: #58666e;\n    background-color: #edf1f2;\n    border-color: #c7d3d6;\n    background-image: none; }\n  .btn-default:active, .btn-default.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default:disabled:focus, .btn-default:disabled.focus {\n    background-color: #fcfdfd;\n    border-color: #dee5e7; }\n  .btn-default.disabled:hover, .btn-default:disabled:hover {\n    background-color: #fcfdfd;\n    border-color: #dee5e7; }\n  .btn-default.btn-bg {\n    border-color: rgba(0, 0, 0, 0.1);\n    background-clip: padding-box; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #7266ba;\n  border-color: #7266ba; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #6254b2;\n    border-color: #5a4daa; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #6254b2;\n    border-color: #5a4daa; }\n  .btn-primary:active, .btn-primary.active, .btn-primary:hover, .btn-primary:focus, .btn-primary.focus, .btn-primary:active:focus,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #6254b2;\n    border-color: #5a4daa;\n    background-image: none; }\n  .btn-primary:active, .btn-primary.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n    background-color: #7266ba;\n    border-color: #7266ba; }\n  .btn-primary.disabled:hover, .btn-primary:disabled:hover {\n    background-color: #7266ba;\n    border-color: #7266ba; }\n\n.btn-success {\n  color: #fff;\n  background-color: #27c24c;\n  border-color: #27c24c; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #23ad44;\n    border-color: #20a03f; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #23ad44;\n    border-color: #20a03f; }\n  .btn-success:active, .btn-success.active, .btn-success:hover, .btn-success:focus, .btn-success.focus, .btn-success:active:focus,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #23ad44;\n    border-color: #20a03f;\n    background-image: none; }\n  .btn-success:active, .btn-success.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n    background-color: #27c24c;\n    border-color: #27c24c; }\n  .btn-success.disabled:hover, .btn-success:disabled:hover {\n    background-color: #27c24c;\n    border-color: #27c24c; }\n\n.btn-info {\n  color: #fff;\n  background-color: #23b7e5;\n  border-color: #23b7e5; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #19a9d5;\n    border-color: #189ec8; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #19a9d5;\n    border-color: #189ec8; }\n  .btn-info:active, .btn-info.active, .btn-info:hover, .btn-info:focus, .btn-info.focus, .btn-info:active:focus,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #19a9d5;\n    border-color: #189ec8;\n    background-image: none; }\n  .btn-info:active, .btn-info.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n    background-color: #23b7e5;\n    border-color: #23b7e5; }\n  .btn-info.disabled:hover, .btn-info:disabled:hover {\n    background-color: #23b7e5;\n    border-color: #23b7e5; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #fad733;\n  border-color: #fad733; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #f9d21a;\n    border-color: #f9cf0b; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #f9d21a;\n    border-color: #f9cf0b; }\n  .btn-warning:active, .btn-warning.active, .btn-warning:hover, .btn-warning:focus, .btn-warning.focus, .btn-warning:active:focus,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #f9d21a;\n    border-color: #f9cf0b;\n    background-image: none; }\n  .btn-warning:active, .btn-warning.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n    background-color: #fad733;\n    border-color: #fad733; }\n  .btn-warning.disabled:hover, .btn-warning:disabled:hover {\n    background-color: #fad733;\n    border-color: #fad733; }\n  .btn-warning:hover, .btn-warning:active, .btn-warning.active {\n    color: #ffffff !important;\n    background-color: #f9d21a;\n    border-color: #f9cf0b; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #f05050;\n  border-color: #f05050; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #ee3939;\n    border-color: #ed2a2a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #ee3939;\n    border-color: #ed2a2a; }\n  .btn-danger:active, .btn-danger.active, .btn-danger:hover, .btn-danger:focus, .btn-danger.focus, .btn-danger:active:focus,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #ee3939;\n    border-color: #ed2a2a;\n    background-image: none; }\n  .btn-danger:active, .btn-danger.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n    background-color: #f05050;\n    border-color: #f05050; }\n  .btn-danger.disabled:hover, .btn-danger:disabled:hover {\n    background-color: #f05050;\n    border-color: #f05050; }\n\n.btn-dark {\n  color: #fff;\n  background-color: #3a3f51;\n  border-color: #3a3f51; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #2f3342;\n    border-color: #292d39; }\n  .btn-dark:focus, .btn-dark.focus {\n    color: #fff;\n    background-color: #2f3342;\n    border-color: #292d39; }\n  .btn-dark:active, .btn-dark.active, .btn-dark:hover, .btn-dark:focus, .btn-dark.focus, .btn-dark:active:focus,\n  .open > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #2f3342;\n    border-color: #292d39;\n    background-image: none; }\n  .btn-dark:active, .btn-dark.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-dark.disabled:focus, .btn-dark.disabled.focus, .btn-dark:disabled:focus, .btn-dark:disabled.focus {\n    background-color: #3a3f51;\n    border-color: #3a3f51; }\n  .btn-dark.disabled:hover, .btn-dark:disabled:hover {\n    background-color: #3a3f51;\n    border-color: #3a3f51; }\n\n.btn-black {\n  color: #fff;\n  background-color: #1c2b36;\n  border-color: #1c2b36; }\n  .btn-black:hover {\n    color: #fff;\n    background-color: #131e25;\n    border-color: #0e161b; }\n  .btn-black:focus, .btn-black.focus {\n    color: #fff;\n    background-color: #131e25;\n    border-color: #0e161b; }\n  .btn-black:active, .btn-black.active, .btn-black:hover, .btn-black:focus, .btn-black.focus, .btn-black:active:focus,\n  .open > .btn-black.dropdown-toggle {\n    color: #fff;\n    background-color: #131e25;\n    border-color: #0e161b;\n    background-image: none; }\n  .btn-black:active, .btn-black.active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-black.disabled:focus, .btn-black.disabled.focus, .btn-black:disabled:focus, .btn-black:disabled.focus {\n    background-color: #1c2b36;\n    border-color: #1c2b36; }\n  .btn-black.disabled:hover, .btn-black:disabled:hover {\n    background-color: #1c2b36;\n    border-color: #1c2b36; }\n\n.btn-icon {\n  padding: 0 !important;\n  text-align: center;\n  width: 34px;\n  height: 34px; }\n  .btn-icon i {\n    top: -1px;\n    position: relative;\n    line-height: 34px; }\n\n.btn-sm {\n  line-height: 1.5rem; }\n\n.btn-rounded {\n  border-radius: 50px;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .btn-rounded.btn-lg {\n    padding-left: 25px;\n    padding-right: 25px; }\n\n.btn > i.pull-left, .btn > i.pull-right {\n  line-height: 2.5rem; }\n\n.btn-block {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 2px; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 2px; }\n\n.btn-addon i {\n  margin: -.4rem -1rem;\n  margin-right: 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  width: 2.3rem;\n  height: 2.3rem;\n  line-height: 2.3rem;\n  text-align: center;\n  position: relative;\n  border-radius: 2px 0 0 2px; }\n  .btn-addon i.pull-right {\n    margin-right: -1rem;\n    margin-left: 1rem;\n    border-radius: 0 2px 2px 0; }\n\n.btn-addon.btn-sm i {\n  margin: -6px -10px;\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n  .btn-addon.btn-sm i.pull-right {\n    margin-right: -10px;\n    margin-left: 10px; }\n\n.btn-addon.btn-lg i {\n  margin: -0.7rem -1.2rem;\n  margin-right: 1rem;\n  width: 3.3rem;\n  height: 3.3rem;\n  line-height: 3.3rem; }\n  .btn-addon.btn-lg i.pull-right {\n    margin-right: -1.2rem;\n    margin-left: 1rem; }\n\n.btn-addon.btn-xs i {\n  width: 1.8rem;\n  height: 1.8rem;\n  line-height: 1.8rem;\n  margin: -.2rem -.85rem;\n  margin-right: 1.1rem; }\n  .btn-addon.btn-xs i.pull-right {\n    margin-left: 1.1rem;\n    margin-right: -.8rem; }\n\n.btn-addon.btn-sm i {\n  width: 1.5rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  margin: -0.4rem -.7rem;\n  margin-right: .5rem;\n  margin-top: 0; }\n  .btn-addon.btn-sm i.pull-right {\n    margin-right: -.7rem; }\n\n.btn-addon.btn-default i {\n  background-color: transparent;\n  border-right: 1px solid #dee5e7; }\n\n.btn-groups .btn {\n  margin-bottom: 5px; }\n\n.i-checks {\n  padding-left: 20px;\n  cursor: pointer; }\n  .i-checks input {\n    opacity: 0;\n    position: absolute;\n    margin-left: -20px; }\n    .i-checks input:checked + i {\n      border-color: #23b7e5; }\n      .i-checks input:checked + i:before {\n        left: 4px;\n        top: 4px;\n        width: 10px;\n        height: 10px;\n        background-color: #23b7e5; }\n    .i-checks input:checked + span .active {\n      display: inherit; }\n    .i-checks input[type=\"radio\"] + i, .i-checks input[type=\"radio\"] + i:before {\n      border-radius: 50%; }\n    .i-checks input[disabled] + i,\n    fieldset[disabled] .i-checks input + i {\n      border-color: #dee5e7;\n      background-color: #F9F9F9; }\n      .i-checks input[disabled] + i:before,\n      fieldset[disabled] .i-checks input + i:before {\n        background-color: #dee5e7; }\n  .i-checks > i {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    border: 1px solid #cfdadd;\n    background-color: #fff;\n    margin-left: -20px;\n    margin-top: -2px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 4px;\n    position: relative; }\n    .i-checks > i:before {\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 0px;\n      height: 0px;\n      background-color: transparent;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s; }\n  .i-checks > span {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    .i-checks > span .active {\n      display: none; }\n\n.i-checks-sm input:checked + i:before {\n  left: 3px;\n  top: 3px;\n  width: 8px;\n  height: 8px; }\n\n.i-checks-sm > i {\n  width: 16px;\n  height: 16px;\n  margin-left: -18px;\n  margin-right: 6px; }\n\n.i-checks-lg input:checked + i:before {\n  left: 8px;\n  top: 8px;\n  width: 12px;\n  height: 12px; }\n\n.i-checks-lg > i {\n  width: 30px;\n  height: 30px; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/338f0505.antd.eot";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/bee72217.antd.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/87f31842.antd.ttf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/37befe99.antd.svg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;