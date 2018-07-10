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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20)
var $app_template$ = __webpack_require__(24)
var $app_style$ = __webpack_require__(25)
var $app_script$ = __webpack_require__(26)

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(21)
var $app_style$ = __webpack_require__(22)
var $app_script$ = __webpack_require__(23)

$app_define$('@app-component/c-input', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "form-wrap"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "type": function () {return this.type},
        "placeholder": function () {return this.placeholder},
        "value": function () {return this.inputValue}
      },
      "classList": [
        "input-list"
      ],
      "events": {
        "change": "onInput"
      }
    }
  ]
}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = {
  ".form-wrap": {
    "width": "100%"
  },
  ".input-list": {
    "borderBottomWidth": "1px",
    "borderBottomColor": "#E6E6E6",
    "height": "80px",
    "width": "100%",
    "fontSize": "22px"
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['type', 'placeholder', 'value'],
  data: function data() {
    return {
      inputValue: ''
    };
  },
  onInput: function onInput(_ref) {
    var value = _ref.value;

    this.inputValue = value;
    this.$dispatch('input', { value: value });
  }
};}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "loginWrap"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "logoWrap"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "logo"
          ]
        }
      ]
    },
    {
      "type": "c-input",
      "attr": {
        "type": "text",
        "placeholder": "用户名/电子邮箱/手机号"
      },
      "events": {
        "input": "changeUserName"
      }
    },
    {
      "type": "c-input",
      "attr": {
        "type": "password",
        "placeholder": "请输入密码"
      },
      "events": {
        "input": "changePassword"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "loginBtnWrap"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "登录"
          },
          "classList": [
            "main-btn1",
            "space1"
          ],
          "events": {
            "click": "checkLogin"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "qloginBtnWrap"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "一键登录"
          },
          "classList": [
            "main-btn2"
          ],
          "events": {
            "click": "getCookie"
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.auth}
      }
    },
    {
      "type": "div",
      "attr": {},
      "children": [
        {
          "type": "text",
          "attr": {}
        }
      ]
    }
  ]
}

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = {
  ".loginWrap": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "paddingTop": "20px",
    "paddingRight": "80px",
    "paddingBottom": "20px",
    "paddingLeft": "80px"
  },
  ".logo": {
    "backgroundImage": "../Common/img/58logo.png",
    "width": "150px",
    "height": "137px"
  },
  ".logoWrap": {
    "marginTop": "100px",
    "marginRight": "0px",
    "marginBottom": "100px",
    "marginLeft": "0px"
  },
  ".main-btn1": {
    "backgroundColor": "#ff552e",
    "height": "80px",
    "color": "#ffffff",
    "width": "100%",
    "textAlign": "center"
  },
  ".main-btn2": {
    "height": "80px",
    "color": "#ff552e",
    "width": "100%",
    "textAlign": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#ff552e",
    "borderRightColor": "#ff552e",
    "borderBottomColor": "#ff552e",
    "borderLeftColor": "#ff552e"
  },
  ".space1": {
    "marginTop": "40px",
    "marginRight": "0px",
    "marginBottom": "30px",
    "marginLeft": "0px"
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  data: {
    username: '',
    password: '',
    auth: ''
  },
  changeUserName: function changeUserName(_ref) {
    var value = _ref.detail.value;

    this.username = value;
  },
  changePassword: function changePassword(_ref2) {
    var value = _ref2.detail.value;

    this.password = value;
  },
  checkLogin: function checkLogin() {
    if (this.username == '') {
      this.$app.$def.prompt.showToast({
        message: '您还没有输入用户名'
      });
    } else if (this.password == '') {
      this.$app.$def.prompt.showToast({
        message: '您还没有输入密码'
      });
    } else {
      this.$app.$def.storage.set({
        key: 'user',
        value: this.username
      });
      this.$app.$def.storage.set({
        key: 'password',
        value: this.password
      });
      this.$app.$def.storage.set({
        key: 'auth',
        value: true
      });
      this.$app.$def.router.push({
        uri: '/Order'
      });
    }
  },
  getCookie: function getCookie() {
    var _this = this;
    this.$app.$def.storage.get({
      key: 'auth',
      success: function success(data) {
        this.auth = data;
        _this.$app.$def.prompt.showToast({
          message: this.auth
        });
      },
      fail: function fail(data, code) {}
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

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map