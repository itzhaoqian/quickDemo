## 快应用
快应用，简单的说就是国内几大手机厂商小米、华为、oppo、vivo等等联合推出的一种新型应用。无需安装，秒开，体验媲美原生。  
基于系统层开发，将脚本转化为原生组件，运行效率更接近原声app，用户体验会更加好。  
还提供了像原生应用一样的入口：应用商店，搜索页等。相关的应用服务都在云端进行存储，用户只需要在手机系统中创建一个云入口，就可以使用网络直接连接到云端的应用服务程序，省去了下载的过程，实现即调即用。

应用商店快应用入口：  

<img src="https://note.youdao.com/yws/api/personal/file/876D739ED3A248E280DA2EB6CBCA21E5?method=download&shareKey=38eb1a72c6952e54b2a2ca35d36d1eb1" width=400  />
<img src="https://note.youdao.com/yws/api/personal/file/79C3EC31DF4243618CA4E63AAF895703?method=download&shareKey=8337df895916f2db9cd4076aafb9a7e5" width=400  />

<img src="https://note.youdao.com/yws/api/personal/file/1A12D496CECB45B695F07C46D12CA910?method=download&shareKey=10097e19410fa548ffe513682627d024" width=400  />

<img src="https://doc.quickapp.cn/tutorial/getting-started/build-environment.png" width=400  />


## 分享内容
接下来我们分享的内容是项目的搭建、预览、调试和构建，结合官方文档和开发过程中的一些经验总结

## 环境配置

+ PC安装toolkit工具
  > npm install -g hap-toolkit
+ 手机安装<a href="https://www.quickapp.cn/docCenter/post/69" targer="_blank">调试器</a>
+ 手机安装<a href="https://www.quickapp.cn/docCenter/post/69" target="_blank">平台预览版</a>
+ 项目搭建，安装toolkit工具后，可通过全局hap命令创建一个项目模板：
  > hap init <ProjectName>  
  > npm install
  > 项目目录:
  > <img src="https://note.youdao.com/yws/api/personal/file/5F1487F7F57243638E9A71DE54CA39FC?method=download&shareKey=6e42e6aaa01678b49c15ea80b76ced2c" width=400  />

  > manifest.json配置：
  > <img src="https://note.youdao.com/yws/api/personal/file/1B2C60B1A49346EAAA1B4435D5AB753D?method=download&shareKey=4091725e0d5e08097025497c66fa44ee" width=400  />
+ 编译项目：
  > npm run build
+ 自动编译项目：
  > npm run watch
+ 安装rpk包
  > 启动http服务：npm run server

## 组件 
快应用与前端开发的最大的区别就是 html 和 css 部分，因为快应用是用原生的方式实现的，很多 html 都不能用，比如没有 p,h1~h2 等，因为它只是模拟了部分 html 标签,最终会转化成原生组件。

- 容器组件
    - div、
    - list（列表视图容器）、
    - list-item（<list>的子组件，用来展示列表具体item，宽度默认充满list组件）、
    - popup（在点击控件或者某个区域后，浮出一个气泡来引导用户）、
    - refresh（下拉刷新容器）、
    - richtext（富文本容器）、
    - stack（基本容器，层叠覆盖前面的组件）、
    - swiper（滑块视图容器）、
    - tabs（tab容器）、
    - tab-bar（<tabs>的子组件，用来展示tab的标签区，子组件排列方式为横向排列）、
    - tab-content（<tabs>的子组件，用来展示tab的内容区，高度默认充满tabs剩余空间，子组件排列方式为横向排列）
- 基础组件
    - a、image、progress、rating（星级评分）、span、text
- 表单组件
    - input、label、option、picker、select、slider、switch、textarea
- 媒体组件
    - video
- 只能使用 a、span、text、label 放置文本内容

## 关于样式


```
<!-- 导入外部文件, 代替style内部样式 -->
<style src="./style.css"></style>

<!-- 合并外部文件 -->
<style>
  @import './style.css';
  .a {
  }
</style>
```


框架目前仅支持长度单位px和%。与传统web页面不同，px是相对于项目配置基准宽度的单位，已经适配了移动端屏幕，其原理类似于rem

开发者只需按照设计稿确定框架样式中的px值即可。设计稿1px与框架样式1px转换公式如下：

设计稿1px / 设计稿基准宽度 = 框架样式1px / 项目配置基准宽度

项目配置基准宽度：项目的配置文件manifest.json中config.designWidth的值，默认为750


默认为flex布局，快应用中display只有两种值，flex和none，需熟练掌握flex的布局技巧

## 关于js
基本语法都能用，ES6 也可以用，项目中已经安装了 babel 依赖。一些浏览器特有的 API 可能不同。比如数据存储用的是快应用的接口 storage。

## 框架指令
+ show，
+ if else
+ for
    
```
<text onclick="onClickCondition">条件指令：</text>
<text if="{{conditionVar === 1}}">if: if条件</text>
<text elif="{{conditionVar === 2}}">elif: elif条件</text>
<text else>else: 其余</text>
<!--for循环-->
<block for="{{carList}}">
  <list-item type="list"  @click="goShare">
    <div class="liWrap">
      <image src="{{$item.src}}" class="liImg">
      <div class="descWrap">
        <text class="title">{{$idx}}</text>
        <text class="date">{{$item.date}}</text>
        <text class="price">{{$item.price}}万</text>
      </div>
    </div>
  </list-item>
</block>
```

## 组件：
+ list组件：  

    为了得到流畅的列表滚动体验，推荐开发者使用list组件替代div组件实现长列表布局，因为Native会复用相同type属性的list-item
+  block组件：

    是表达逻辑区块的组件，没有对应的Native组件。可以使用<block>实现更为灵活的"列表/条件渲染"。如在<block>上使用for指令和if指令
+  tabs组件：

    tabs中封装了常见功能和效果：页签支持横向滚动，支持手势滑动切换内容页等
+  swiper组件：

    滑块视图容器
+  自带弹框组件

    <img src="https://note.youdao.com/yws/api/personal/file/996F1E9485B64F2AB511C882EAA58818?method=download&shareKey=50c01dc2b51178ecbf3716de23c17496" width=200  />  

```   
   const prompt = require('@system.prompt')
   prompt.showToast(OBJECT)
   prompt.showDialog(OBJECT)
   prompt.showContextMenu(OBJECT)
   //示例
    checkLogin(){
      let _this = this;
      this.$app.$def.prompt.showDialog({
          title: 'title',
          message: 'message',
          buttons: [
            {
              text: 'btn',
              color: '#33dd44'
            },
            {
              text: 'btn1',
              color: '#33dd44'
            },
            {
              text: 'btn2',
              color: '#33dd44'
            }
          ],
          success: function (data) {
            if( data.index == 0 )
            {
              _this.$app.$def.prompt.showToast({
                message: '第一个'
              })
            }
            else if( data.index == 1)
            {
              _this.$app.$def.prompt.showToast({
                message: '第二个'
              })
            }
          },
          cancel: function () {
            _this.$app.$def.prompt.showToast({
              message: 'cancel'
            })
          },
          fail: function (data, code) {
            _this.$app.$def.prompt.showToast({
              message: 'fail'
            })
          }
        })
    }
```


## 关于路由跳转
- manifest.json中路由配置

```
"router": {
    "entry": "Demo",
    "pages": {
      "Demo": {
        "component": "index"
      },
      "DemoDetail": {
        "component": "index"
      },
      "About": {
        "component": "index"
      },
      "Order":{
        "component":"index"
      },
      "Login":{
        "component":"index"
      }
    }
  }
```

- webview打开外部页面
```
<!--manifest.json中配置接口-->
{"name": "system.webview"}

import webview from '@system.webview' 

webview.loadUrl({
    url: 'http://www.example.com'
})
``` 
    

-  外部网页跳转回当前应用

```
system.go('/detail?param1=value1')
```
- 应用内部跳转

```
import router from '@system.router'
<!--路由及传参-->
router.push({
  uri: '/DemoDetail',
  params:{}
})

```
- Deeplink
    框架支持通过链接从外部打开应用。  

    deeplink支持的格式：  
    
    http://hapjs.org/app/<package>/[path][?key=value]  

    https://hapjs.org/app/<package>/[path][?key=value]  
    
    hap://app/<package>/[path][?key=value]
    
    
    package: 应用包名，必选  
    path: 应用内页面的path，可选，默认为首页  
    key-value: 希望传给页面的参数，可选，可以有多个  
    
- 接收参数  
    - protected  
    定义的属性，允许被应用内部页面请求传递的数据覆盖，不允许被应用外部请求传递的数据覆盖  
    - public  
    定义的属性允许被传入的数据覆盖，如果外部传入数据的某个属性未被声明，在public中不会新增这个属性
    - private   
    定义的属性不允许被覆盖
    - data   
    使用data方式声明的属性会被外部数据覆盖，因此存在一定安全风险，推荐使用public,protected,private来声明属性（注意：它们不能与data同时声明）



## 生命周期
 
- 页面的生命周期：onInit、onReady、onShow、
onHide、onDestroy、onBackPress、onMenuPress
- 页面的状态：显示、隐藏、销毁
- APP的生命周期：onCreate、onDestroy
  #### 页面的生命周期
    - onInit()：  
表示ViewModel的数据已经准备好，可以开始使用页面中的数据
    - onReady()：  
表示ViewModel的模板已经编译完成，可以开始获取DOM节点（如：this.$element(idxxx)）
    - onShow(), onHide()：  
APP中可以同时运行多个页面，但是每次只能显示其中一个页面；页面被切换隐藏时调用onHide()，页面被切换重新显示时调用onShow()
    - onDestroy()：  
页面销毁
    - onBackPress()：  
监听返回按钮动作，返回上一页的接口API：router.back()
    - onMenuPress():  
监听菜单按钮动作
  #### app状态
    - onCreate, onDestroy

## 组件接口
- 基本功能 

    - 应用上下文、日志打印、页面路由、
    
- 界面交互
    - 分享、弹窗、打开网页、通知消息、震动
- 网络访问
    - 上传下载、数据请求
- 文件数据
    - 数据存储、文件存储

- 系统能力 

    - 二维码（生成、扫描）、传感器、剪贴板、地理位置、桌面图标、日历事件、网络状态、设备信息、屏幕亮度、系统音量、电量信息、应用管理、录音等
- 安全 

    - 密码算法

- 图形图像，声音音频

- 厂商服务： 

    - 推送，支付，统计，账号

- 第三方服务： 

    - 支付宝支付，微信支付，第三方分享

## 发布
目前快应用的发布，需要在快应用平台申请账号，然后绑定需要上家的应用商店的开发者账号，然后上传build出来的rpk 

sign：签名模块，当前仅有debug签名，如果内测上线，请添加release文件夹，增加线上签名  

通过openssl命令等工具生成签名文件private.pem、certificate.pem，例如：


```
openssl req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem
```

在工程的sign目录下创建release目录，将私钥文件private.pem和证书文件certificate.pem拷贝进去  
然后在工程的根目录下运行


```
npm run release
```


## 注意
- 样式：
    - 只支持px和% 
    - background-color:
    - position:只能是fixed|none

    - 不能用border-bottom:1px solid #333  
    border-bottom-width: 1px;    border-bottom-color: #0faeff;

    - 不支持浮动

    - 动画 
    支持transform、animation的一些常用操作
    不支持canvas
- rpk不能超过1M限制，不能开发复杂应用


## 总结
- 优点
提供了很多系统的功能，比如分享、通知、扫描二维码、添加图标到桌面
用户体验好，无需下载，秒开，占用内存小
可以关联原生应用
- 缺点
每个平台都要注册个账号
没有一个集成开发环境，调试麻烦，且 devtools 很卡
rpk 文件最大1M
国内手机厂商推出的，自然是不支持 ios 了  

总的来说，快应用这种形态对用户来说还是很好的，在下载 APP 前就可以体验到应用的一些功能。快应用的快在于它进行了很多原生的优化，也在于它小，小到用户感觉不到，这也注定它不能做的很复杂。

参访提供的示例代码，项目地址：https://github.com/quickappcn/sample.git






