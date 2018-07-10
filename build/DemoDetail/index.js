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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12)
var $app_template$ = __webpack_require__(16)
var $app_style$ = __webpack_require__(17)
var $app_script$ = __webpack_require__(18)

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(13)
var $app_style$ = __webpack_require__(14)
var $app_script$ = __webpack_require__(15)

$app_define$('@app-component/cityselector', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "inputItem"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "../Common/img/icon-address.png"
          },
          "classList": [
            "imgCss"
          ]
        },
        {
          "type": "label",
          "attr": {
            "value": "检测城市："
          }
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.cityName}
          },
          "classList": [
            "dateTxt1",
            "txt3"
          ],
          "events": {
            "click": "changeCity"
          }
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.isShow==1},
      "children": [
        {
          "type": "stack",
          "attr": {},
          "children": [
            {
              "type": "list",
              "attr": {},
              "classList": [
                "cityPage"
              ],
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "top"
                  },
                  "classList": [
                    "fixTop"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "选择城市"
                      },
                      "classList": [
                        "oLeft"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "取消"
                      },
                      "classList": [
                        "oRight"
                      ],
                      "events": {
                        "click": "closePage"
                      }
                    }
                  ]
                },
                {
                  "type": "list-item",
                  "attr": {
                    "type": "common"
                  },
                  "repeat": function () {return this.cityData},
                  "classList": [
                    "listItem"
                  ],
                  "events": {
                    "click": function (evt) {this.selectItem(this.$item,evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.localname}
                      }
                    }
                  ]
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  ".dateTxt1": {
    "marginLeft": "100px"
  },
  ".inputItem": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "borderRadius": "50px",
    "height": "70px",
    "paddingTop": "5px",
    "paddingRight": "50px",
    "paddingBottom": "5px",
    "paddingLeft": "50px"
  },
  ".imgCss": {
    "width": "30px",
    "marginTop": "15px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "0px"
  },
  ".txt3": {
    "color": "#999999"
  },
  ".cityPage": {
    "width": "100%",
    "height": "100%",
    "position": "fixed",
    "backgroundColor": "#ffffff"
  },
  ".fixTop": {
    "height": "80px",
    "backgroundColor": "#f6f6f6",
    "justifyContent": "space-between",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".fixTop .oLeft": {
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "fixTop"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "oLeft"
        }
      ]
    }
  },
  ".fixTop .oRight": {
    "color": "#FF0000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "fixTop"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "oRight"
        }
      ]
    }
  },
  ".listItem": {
    "height": "70px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f6f6f6",
    "marginTop": "10px",
    "marginRight": "40px",
    "marginBottom": "10px",
    "marginLeft": "40px"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: {
    cityName: "请选择监测城市",
    cityData: '',
    isShow: 0
  },
  changeCity: function changeCity() {
    var _this = this;
    this.$app.$def.fetch.fetch({
      url: 'https://meizhouapi.58.com/v2/city/all',
      method: "GET",
      header: { 'Content-Type': 'application/json' },
      success: function success(data) {
        data = JSON.parse(data.data);
        _this.cityData = data.data;
        _this.isShow = 1;
      },
      fail: function fail(data, code) {
        _this.cityName = 'fail';
      }
    });
  },
  closePage: function closePage() {
    this.isShow = 0;
  },
  selectItem: function selectItem($item) {
    this.isShow = 0;
    this.cityName = $item.localname;
  }
};}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": "../Common/img/header1.jpg"
      },
      "classList": [
        "headerPic"
      ]
    },
    {
      "type": "image",
      "attr": {
        "src": "../Common/img/header2.jpg"
      },
      "classList": [
        "headerPic"
      ]
    },
    {
      "type": "image",
      "attr": {
        "src": "../Common/img/header3.jpg"
      },
      "classList": [
        "headerPic"
      ]
    },
    {
      "type": "image",
      "attr": {
        "src": "../Common/img/header6.jpg"
      },
      "classList": [
        "headerPic"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "m-wrap-bg"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "m-bothImg-wrap"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "m-img-wrap"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../Common/img/chejianwindow3.png"
                  },
                  "classList": [
                    "m-cj"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "m-img-wrap"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../Common/img/yanbaowindow3.png"
                  },
                  "classList": [
                    "m-yb"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "inputItemWrap"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "inputItemWrapHeader"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "预约服务"
                  },
                  "classList": [
                    "inputItemWrapHeaderLeft"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "每天9:00-17:00随约随检"
                  },
                  "classList": [
                    "inputItemWrapHeaderRight"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "orderpackage"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "op-div"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "op-item"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "车检套餐"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "149元"
                              },
                              "classList": [
                                "ff552e"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "258元"
                              },
                              "classList": [
                                "linethrough"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "op-item"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {},
                          "classList": [
                            "roll"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "延保套餐"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "599元"
                              },
                              "classList": [
                                "ff552e"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "899元"
                              },
                              "classList": [
                                "linethrough"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "op-underinfo"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {},
                          "classList": [
                            "triangleUp"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "inputItem1"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../Common/img/icon-time.png"
                  },
                  "classList": [
                    "imgCss"
                  ]
                },
                {
                  "type": "label",
                  "attr": {
                    "value": "检测时间："
                  }
                },
                {
                  "type": "picker",
                  "attr": {
                    "type": "date"
                  },
                  "classList": [
                    "picker"
                  ],
                  "events": {
                    "change": "pickerChange"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.pickerTxt}
                  },
                  "classList": [
                    "dateTxt",
                    "txt3"
                  ]
                }
              ]
            },
            {
              "type": "cityselector",
              "attr": {}
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "btn-wrap"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "立即预约"
                  },
                  "classList": [
                    "orderButton"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "link-wrap"
              ],
              "children": [
                {
                  "type": "a",
                  "attr": {
                    "href": "http://j1.58cdn.com.cn/car/app/2017/jiance_zhenbao/baozhangfuwu.html",
                    "value": " 保障说明1 "
                  }
                },
                {
                  "type": "a",
                  "attr": {
                    "value": " 检测项目 "
                  },
                  "events": {
                    "click": "goNewLink"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "float"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "call"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": ""
              }
            },
            {
              "type": "a",
              "attr": {
                "href": "tel:400-999-5858",
                "value": "电话"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "myOrder"
          ],
          "children": [
            {
              "type": "a",
              "attr": {
                "href": "/Login",
                "value": "我的订单"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "goyuyue"
          ],
          "children": [
            {
              "type": "a",
              "attr": {
                "value": "立即预约"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "flexWrap": "wrap"
  },
  ".txt3": {
    "color": "#999999"
  },
  ".headerPic1": {
    "width": "100%",
    "height": "256px"
  },
  ".headerPic2": {
    "width": "100%",
    "height": "270px"
  },
  ".headerPic3": {
    "width": "100%",
    "height": "187px"
  },
  ".headerPic4": {
    "width": "100%",
    "height": "407px"
  },
  ".float": {
    "position": "fixed",
    "right": "0px",
    "bottom": "0px",
    "width": "100%",
    "height": "100px",
    "lineHeight": "100px",
    "backgroundColor": "#ffffff",
    "color": "#ffffff",
    "textAlign": "center",
    "zIndex": 4,
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  ".float .call": {
    "display": "flex",
    "color": "#666666",
    "width": "33.3%",
    "justifyContent": "center",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "float"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "call"
        }
      ]
    }
  },
  ".float .myOrder": {
    "backgroundColor": "#01bb8d",
    "width": "33.3%",
    "justifyContent": "center",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "float"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "myOrder"
        }
      ]
    }
  },
  ".float .goyuyue": {
    "backgroundColor": "#0e806c",
    "width": "33.3%",
    "justifyContent": "center",
    "height": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "float"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "goyuyue"
        }
      ]
    }
  },
  ".op-div": {
    "flexDirection": "column",
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px"
  },
  ".myOrder a": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "myOrder"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "a"
        }
      ]
    }
  },
  ".goyuyue a": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "goyuyue"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "a"
        }
      ]
    }
  },
  ".m-wrap-bg": {
    "backgroundColor": "#01bf97",
    "flexWrap": "wrap",
    "display": "flex",
    "justifyContent": "center",
    "marginBottom": "200px",
    "marginTop": "-220px"
  },
  ".m-bothImg-wrap": {
    "width": "100%"
  },
  ".m-img-wrap": {
    "width": "50%",
    "marginBottom": "20px"
  },
  ".m-cj": {
    "width": "100%"
  },
  ".m-yb": {
    "width": "100%"
  },
  ".inputItemWrap": {
    "width": "96%",
    "backgroundColor": "#f6f6f6",
    "borderRadius": "5px",
    "paddingTop": "20px",
    "paddingRight": "40px",
    "paddingBottom": "100px",
    "paddingLeft": "40px",
    "flexWrap": "wrap",
    "display": "flex",
    "justifyContent": "center"
  },
  ".inputItemWrapHeader": {
    "width": "100%"
  },
  ".inputItemWrapHeaderLeft": {
    "color": "#01bf97",
    "fontWeight": "bold",
    "fontSize": "32px"
  },
  ".inputItemWrapHeaderRight": {
    "color": "#999999",
    "fontSize": "24px"
  },
  ".orderpackage": {
    "fontSize": "14px"
  },
  ".orderpackage .ff552e": {
    "color": "#ff552e",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "orderpackage"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ff552e"
        }
      ]
    }
  },
  ".orderpackage .linethrough": {
    "textDecoration": "line-through",
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "orderpackage"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "linethrough"
        }
      ]
    }
  },
  ".orderpackage .op-underinfo": {
    "backgroundColor": "#ace4d6",
    "borderRadius": "3px",
    "color": "#0e806c",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "orderpackage"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "op-underinfo"
        }
      ]
    }
  },
  ".orderpackage .op-underinfo .triangleUp": {
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "orderpackage"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "op-underinfo"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "triangleUp"
        }
      ]
    }
  },
  ".inputItem1": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "borderRadius": "50px",
    "height": "70px",
    "paddingTop": "5px",
    "paddingRight": "50px",
    "paddingBottom": "5px",
    "paddingLeft": "50px",
    "marginBottom": "20px"
  },
  ".picker": {
    "width": "250px",
    "height": "100px",
    "zIndex": 2
  },
  ".imgCss": {
    "width": "30px",
    "marginTop": "15px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "0px"
  },
  ".dateTxt": {
    "zIndex": 1,
    "marginLeft": "-150px"
  },
  ".orderButton": {
    "width": "100%",
    "height": "70px",
    "backgroundColor": "#01bf97",
    "color": "#ffffff",
    "borderRadius": "40px",
    "textAlign": "center",
    "animationName": "scale",
    "animationDuration": "1000ms",
    "animationIterationCount": -1,
    "marginTop": "30px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px"
  },
  "@KEYFRAMES": {
    "scale": [
      {
        "transform": "{\"scaleX\":0.97,\"scaleY\":0.97}",
        "time": 0
      },
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 25
      },
      {
        "transform": "{\"scaleX\":0.97,\"scaleY\":0.97}",
        "time": 50
      },
      {
        "transform": "{\"scaleX\":0.94,\"scaleY\":0.94}",
        "time": 75
      },
      {
        "transform": "{\"scaleX\":0.97,\"scaleY\":0.97}",
        "time": 100
      }
    ]
  },
  ".btn-wrap": {
    "justifyContent": "center",
    "width": "100%"
  },
  ".link-wrap": {
    "justifyContent": "center",
    "width": "100%"
  },
  ".link-wrap a": {
    "fontSize": "22px",
    "color": "#01bf97",
    "textDecoration": "underline",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "link-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "a"
        }
      ]
    }
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.contact');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.share');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.webview');

var _system6 = _interopRequireDefault(_system5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {
    pickerTxt: '请选择时间'
  },
  onReady: function onReady() {
    console.log('加载好了');
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  },
  pickerChange: function pickerChange(date) {
    var oDate = new Date();
    var time = oDate.getHours() + ':' + oDate.getMinutes();
    this.pickerTxt = date.year + '-' + date.month + '-' + date.day + '  ' + time;
    console.log(date);
  },
  goNewLink: function goNewLink() {
    _system6.default.loadUrl({
      url: 'http://j1.58cdn.com.cn/car/app/2017/jiance_zhenbao/baozhangfuwu.html'
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