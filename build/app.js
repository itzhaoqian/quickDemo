(function(){
      
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(5)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(6);

var _util2 = _interopRequireDefault(_util);

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.fetch');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.prompt');

var _system6 = _interopRequireDefault(_system5);

var _system7 = $app_require$('@app-module/system.storage');

var _system8 = _interopRequireDefault(_system7);

var _system9 = $app_require$('@app-module/system.share');

var _system10 = _interopRequireDefault(_system9);

var _service = $app_require$('@app-module/service.share');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  showMenu: _util2.default.showMenu,
  createShortcut: _util2.default.createShortcut,
  fetch: _system4.default,
  router: _system2.default,
  prompt: _system6.default,
  storage: _system8.default,
  share: _system10.default,
  shares: _service2.default
};
(exports.default || module.exports).manifest = {"package":"com.application.demo","name":"quickDemo","versionName":"1.1","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.contact"},{"name":"system.share"},{"name":"service.share","params":{"appSign":"abcdefg...","qqKey":"1234567","wxKey":"wx1234","sinaKey":"1234"}},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"},"Order":{"component":"index"},"Login":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","titleBarText":"58二手车","menu":true,"pages":{"Demo":{"titleBarText":"首页","menu":false},"DemoDetail":{"titleBarText":"58车检"},"About":{"menu":false},"Order":{"titleBarText":"我的订单"},"Login":{"titleBarText":"登录"}}}};
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 显示菜单
 */
function showMenu() {
  var prompt = $app_require$('@app-module/system.prompt');
  var router = $app_require$('@app-module/system.router');
  var appInfo = $app_require$('@app-module/system.app').getInfo();
  var share = $app_require$('@app-module/system.share');
  prompt.showContextMenu({
    itemList: ['保存桌面', '数据分享', '关于', '取消'],
    success: function success(ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;
        case 1:
          // 关于
          share.share({
            type: 'text/html',
            data: '这是分享的内容',
            success: function success(data) {
              console.log('handling success');
            },
            fail: function fail(data, code) {
              console.log('handling fail, code = ' + code);
            }
          });
          break;
        case 2:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          });
          break;
        case 3:
          // 取消
          break;
        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  var prompt = $app_require$('@app-module/system.prompt');
  var shortcut = $app_require$('@app-module/system.shortcut');
  shortcut.hasInstalled({
    success: function success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function fail(errmsg, errcode) {
            prompt.showToast({
              message: errcode + ': ' + errmsg
            });
          }
        });
      }
    }
  });
}

exports.default = {
  showMenu: showMenu,
  createShortcut: createShortcut
};

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.application.demo","name":"quickDemo","versionName":"1.1","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.contact"},{"name":"system.share"},{"name":"service.share","params":{"appSign":"abcdefg...","qqKey":"1234567","wxKey":"wx1234","sinaKey":"1234"}},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.storage"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"},"Order":{"component":"index"},"Login":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","titleBarText":"58二手车","menu":true,"pages":{"Demo":{"titleBarText":"首页","menu":false},"DemoDetail":{"titleBarText":"58车检"},"About":{"menu":false},"Order":{"titleBarText":"我的订单"},"Login":{"titleBarText":"登录"}}}};
  }
})();
//# sourceMappingURL=app.js.map