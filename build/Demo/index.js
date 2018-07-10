(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(8)
var $app_style$ = __webpack_require__(9)
var $app_script$ = __webpack_require__(10)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "swiper",
      "attr": {
        "autoplay": "true",
        "interval": "4000"
      },
      "classList": [
        "banner"
      ],
      "children": [
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "banner"
          ],
          "repeat": function () {return this.bannerList},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.src}
              },
              "classList": [
                "headerPic"
              ],
              "events": {
                "click": function (evt) {this.goLink(this.$idx,evt)}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.isRefreshing}
      },
      "classList": [
        "refresh"
      ],
      "events": {
        "refresh": "refresh"
      },
      "children": [
        {
          "type": "list",
          "attr": {},
          "classList": [
            "listWrap"
          ],
          "events": {
            "scrollbottom": "loadMoreData"
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.carList},
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "list"
                  },
                  "events": {
                    "click": "goShare"
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "liWrap"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.src}
                          },
                          "classList": [
                            "liImg"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "descWrap"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.name}
                              },
                              "classList": [
                                "title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.date}
                              },
                              "classList": [
                                "date"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return (this.$item.price) + '万'}
                              },
                              "classList": [
                                "price"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "loadStatus"
              },
              "classList": [
                "load-status"
              ],
              "children": [
                {
                  "type": "progress",
                  "attr": {
                    "type": "circular",
                    "show": function () {return this.hasMoreData}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "show": function () {return this.hasMoreData},
                    "id": "liWrap",
                    "value": "加载更多"
                  },
                  "id": "liWrap"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".banner": {
    "width": "100%",
    "height": "300px",
    "indicatorColor": "#ffffff"
  },
  ".headerPic": {
    "width": "100%",
    "height": "300px",
    "indicatorColor": "#ffffff"
  },
  ".listWrap": {
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "flexDirection": "column"
  },
  ".liWrap": {
    "width": "700px",
    "height": "200px"
  },
  ".liImg": {
    "width": "200px"
  },
  ".descWrap": {
    "flexDirection": "column",
    "flexWrap": "wrap",
    "width": "500px",
    "marginLeft": "20px"
  },
  ".descWrap .date": {
    "fontSize": "22px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "descWrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "date"
        }
      ]
    }
  },
  ".descWrap .price": {
    "color": "#FF0000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "descWrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "price"
        }
      ]
    }
  },
  ".load-status": {
    "justifyContent": "center"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  private: {
    bannerList: [{ src: '../Common/img/header1.jpg', href: '/DemoDetail' }, { src: '../Common/img/header2.jpg', href: '/DemoDetail' }, { src: '../Common/img/header3.jpg', href: '/DemoDetail' }, { src: '../Common/img/header6.jpg', href: '/DemoDetail' }],
    carList: [{ src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }, { src: 'http://pic1.58cdn.com.cn/p1/big/n_v2aa745db8d557496b860eea1b08ac0e30.jpg?w=364&h=270&crop=1', name: '日产 轩逸 2016款 1.6XL CVT豪华版-精品之家 只做精品', price: '12', date: '2015-09-10' }],
    isRefreshing: false
  },
  protected: {},
  onInit: function onInit() {
    console.info('onInit~~~~~');
  },
  onReady: function onReady() {
    console.log(this.$element('liWrap'));
  },
  refresh: function refresh(e) {
    var _this = this;

    _this.isRefreshing = e.refreshing;
    setTimeout(function () {
      _this.isRefreshing = false;
      _this.$app.$def.prompt.showToast({
        message: '刷新完成'
      });
    }, 3000);
  },
  getCookie: function getCookie() {
    var _this = this;
    this.$app.$def.storage.get({
      key: 'auth',
      success: function success(data) {
        _this.auth = data;
        _this.$app.$def.prompt.showToast({
          message: this.auth
        });
      },
      fail: function fail(data, code) {}
    });
  },
  goLink: function goLink($idx) {
    this.$app.$def.router.push({
      uri: this.bannerList[$idx].href
    });
  },
  goShare: function goShare() {
    var _this = this;
    this.$app.$def.shares.share({
      shareType: 0,
      title: '标题',
      summary: '摘要',
      imagePath: 'xxx/xxx/xxx/share.jpg',
      targetUrl: 'http://www.example.com',
      platforms: ["WEIBO"],
      success: function success(data) {
        console.log('handling success');
        _this.$app.$def.prompt.showToast({
          message: 'success'
        });
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
        _this.$app.$def.prompt.showToast({
          message: 'fail'
        });
      }
    });
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map