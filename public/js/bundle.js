/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ghibli = __webpack_require__(/*! ./models/ghibli.js */ \"./src/models/ghibli.js\");\nconst GhibliView = __webpack_require__(/*! ./views/ghibli_view.js */ \"./src/views/ghibli_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  console.log('Loaded, homie!');\n\n  // selects the html container to hold all the data\n  const ghibliContainer = document.querySelector('#ghibli-container');\n\n  // receives and loads all API data ready to pass onto detailing\n  const ghibliView = new GhibliView(ghibliContainer);\n  ghibliView.bindEvents();\n\n  // gets data from API\n  const ghibli = new Ghibli();\n  ghibli.getData();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n}\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then(res => res.json());\n};\n\n\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/ghibli.js":
/*!******************************!*\
  !*** ./src/models/ghibli.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\n\n\nconst Ghibli = function () {\n  this.ghiblis = [];\n}\n\nGhibli.prototype.getData = function () {\n  const url = 'https://ghibliapi.herokuapp.com/films';\n  const request = new Request(url);\n  request.get()\n    .then((data) => {\n      // console.log(data);\n      this.ghiblis = data;\n      // received data from API, now ready and publishing it to read elsewhere\n      PubSub.publish('Ghibli:data-loaded', this.ghiblis);\n    })\n    .catch((error) => {\n      console.error(error);\n    })\n};\n\n\n\nmodule.exports = Ghibli;\n\n\n//# sourceURL=webpack:///./src/models/ghibli.js?");

/***/ }),

/***/ "./src/views/detail_view.js":
/*!**********************************!*\
  !*** ./src/views/detail_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\n\n\nconst DetailView = function (container, ghibli) {\n  this.detailContainer = container;\n  this.ghibli = ghibli;\n};\n\nDetailView.prototype.render = function () {\n  // create h3 title\n  const title = document.createElement('h3');\n  // create UL container for list items\n  const listContainer = document.createElement('ul');\n  const director = document.createElement('li');\n  const producer = document.createElement('li');\n  title.textContent = this.ghibli.name;\n  // console.log(this.ghibli.director);\n  director.textContent = this.ghibli.director;\n  producer.textContent = this.ghibli.producer;\n\n  // adding list items to list container\n  listContainer.appendChild(director);\n  listContainer.appendChild(producer);\n\n  this.detailContainer.appendChild(title);\n  this.detailContainer.appendChild(listContainer);\n\n};\n\n\nmodule.exports = DetailView;\n\n\n//# sourceURL=webpack:///./src/views/detail_view.js?");

/***/ }),

/***/ "./src/views/ghibli_view.js":
/*!**********************************!*\
  !*** ./src/views/ghibli_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst DetailView = __webpack_require__(/*! ./detail_view.js */ \"./src/views/detail_view.js\");\n\n\nconst GhibliView = function (container) {\n  this.container = container;\n};\n\n\nGhibliView.prototype.bindEvents = function () {\n  PubSub.subscribe('Ghibli:data-loaded', (event) => {\n    // received API data now loading all of it\n    this.ghiblis = event.detail;\n    // console.log(this.ghiblis);\n    // method to render & display all of the API data\n    this.render(this.ghiblis);\n  });\n};\n\nGhibliView.prototype.render = function (ghiblis) {\n  // from the API data get each element\n  ghiblis.forEach((ghibli) => {\n    // link to new view to deal with the individual details\n    const detailView = new DetailView(this.container, ghibli);\n    detailView.render();\n  });\n};\n\n\n\n\nmodule.exports = GhibliView;\n\n\n//# sourceURL=webpack:///./src/views/ghibli_view.js?");

/***/ })

/******/ });