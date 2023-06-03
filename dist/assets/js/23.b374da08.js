(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{435:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("初识小程序笔记")])]),t._v(" "),s("h1",{attrs:{id:"uni-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uni-app"}},[t._v("#")]),t._v(" uni-app")]),t._v(" "),s("h2",{attrs:{id:"_1-小程序简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序简介"}},[t._v("#")]),t._v(" 1.小程序简介")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/05/16/E9psKl3z8CkdVmS.png",alt:"image-20220516214640666"}})]),t._v(" "),s("h3",{attrs:{id:"_1-项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目结构"}},[t._v("#")]),t._v(" 1.项目结构")]),t._v(" "),s("h4",{attrs:{id:"_1-了解项目的基本组成结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-了解项目的基本组成结构"}},[t._v("#")]),t._v(" 1.了解项目的基本组成结构")]),t._v(" "),s("p",[s("strong",[t._v("①pages 用来存放所有小程序的页面")])]),t._v(" "),s("p",[s("strong",[t._v("②utils 用来存放工具性质的模块(例如:格式化时间的自定义模块)")])]),t._v(" "),s("p",[s("strong",[t._v("③app.js 小程序项目的入口文件")])]),t._v(" "),s("p",[s("strong",[t._v("④app.json 小程序项目的全局配置文件")])]),t._v(" "),s("p",[s("strong",[t._v("⑤app.wxss 小程序项目的全局样式文件")])]),t._v(" "),s("p",[s("strong",[t._v("⑥project.config.json 项目的配置文件")])]),t._v(" "),s("p",[s("strong",[t._v("⑦sitemap.json 用来配置小程序及其页面是否允许被微信索引")])]),t._v(" "),s("h4",{attrs:{id:"_2-小程序页面的组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序页面的组成部分"}},[t._v("#")]),t._v(" 2.小程序页面的组成部分")]),t._v(" "),s("p",[s("strong",[t._v("小程序官方建议把所有小程序的页面，都存放在pages目录中，以单独的文件夹存在")])]),t._v(" "),s("p",[s("strong",[t._v("其中，每个页面由4个基本文件组成，它们分别是:")])]),t._v(" "),s("p",[s("strong",[t._v("①js 文件(页面的脚本文件,存放页面的数据、事件处理函数等)")])]),t._v(" "),s("p",[s("strong",[t._v("②.json 文件(当前页面的配置文件,配置窗口的外观、表现等)")])]),t._v(" "),s("p",[s("strong",[t._v("③.wxml文件(页面的模板结构文件)")])]),t._v(" "),s("p",[s("strong",[t._v("④.wxss文件(当前页面的样式表文件)")])]),t._v(" "),s("h2",{attrs:{id:"_2-json配置文件的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-json配置文件的作用"}},[t._v("#")]),t._v(" 2.JSON配置文件的作用")]),t._v(" "),s("p",[t._v("JSON是一种数据格式，在实际开发中，JSON 总是以配置文件的形式出现。小程序项目中也不例外:通过不同的json配置文件,可以对小程序项目进行不同级别的配置。")]),t._v(" "),s("p",[t._v("小程序项目中有4种json配置文件,分别是:")]),t._v(" "),s("p",[s("strong",[t._v("①项目根目录中的app.json配置文件")])]),t._v(" "),s("p",[s("strong",[t._v("②项目根目录中的project.config.json配置文件")])]),t._v(" "),s("p",[s("strong",[t._v("③项目根目录中的sitemap.json配置文件")])]),t._v(" "),s("p",[s("strong",[t._v("④每个页面文件夹中的json配置文件")])]),t._v(" "),s("h3",{attrs:{id:"_1-app-json文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-app-json文件"}},[t._v("#")]),t._v(" 1.app.json文件")]),t._v(" "),s("p",[t._v("app.json是当前小程序的全局配置，包括了小程序的所有页面路径、窗口外观、界面表现、底部tab等。Demo项目里边的app.json配置内容如下:")]),t._v(" "),s("p",[t._v("简单了解下这4个配置项的作用:")]),t._v(" "),s("p",[s("strong",[t._v("①pages: 用来记录当前小程序所有页面的路径")])]),t._v(" "),s("p",[s("strong",[t._v("②window: 全局定义小程序所有页面的背景色、文字颜色等")])]),t._v(" "),s("p",[s("strong",[t._v("③style: 全局定义小程序组件所使用的样式版本")])]),t._v(" "),s("p",[s("strong",[t._v("④sitemapLocation: 用来指明sitemap.json的位置")])]),t._v(" "),s("h3",{attrs:{id:"_2-project-config-json文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-project-config-json文件"}},[t._v("#")]),t._v(" 2.project.config.json文件")]),t._v(" "),s("p",[t._v("project.config.json是项目配置文件,用来记录我们对小程序开发工具所做的个性化配置,例如:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("setting 中保存了编译相关的配置")])]),t._v(" "),s("li",[s("strong",[t._v("projectname 中保存的是项目名称")])]),t._v(" "),s("li",[s("strong",[t._v("appid 中保存的是小程序的账号ID")])])]),t._v(" "),s("h3",{attrs:{id:"_3-sitemap-json文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sitemap-json文件"}},[t._v("#")]),t._v(" 3.sitemap.json文件")]),t._v(" "),s("p",[t._v("微信现已开放小程序内搜索，效果类似于PC网页的SEO。sitemap.json文件用来配置小程序页面是否允许微信索引。")]),t._v(" "),s("p",[t._v("当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中。")]),t._v(" "),s("p",[s("strong",[t._v("注意: sitemap的索引提示是默认开启的，如需要关闭sitemap的索引提示，可在小程序项目配置文件project.config.json的setting中配置字段checkSiteMap为false")])]),t._v(" "),s("h3",{attrs:{id:"_4-页面的json配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-页面的json配置文件"}},[t._v("#")]),t._v(" 4.页面的json配置文件")]),t._v(" "),s("p",[t._v("小程序中的每一个页面，可以使用json文件来对本页面的"),s("strong",[t._v("窗口外观进行配置，页面中的配置项会覆盖app.json的window中相同的配置项。")])]),t._v(" "),s("h3",{attrs:{id:"_5-新建小程序页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-新建小程序页面"}},[t._v("#")]),t._v(" 5.新建小程序页面")]),t._v(" "),s("p",[t._v("只需要在"),s("strong",[t._v("app.json -> pages")]),t._v("中新增页面的存放路径,小程序开发者工具即可帮我们自动创建对应的页面文件。")]),t._v(" "),s("h3",{attrs:{id:"_6-修改项目首页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-修改项目首页"}},[t._v("#")]),t._v(" 6.修改项目首页")]),t._v(" "),s("p",[t._v("只需要调整"),s("strong",[t._v("app.json -> pages")]),t._v("数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一-位的页面，当作项目首页进行渲染。")]),t._v(" "),s("h2",{attrs:{id:"_3-wxml模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-wxml模板"}},[t._v("#")]),t._v(" 3.wxml模板")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是wxml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是wxml"}},[t._v("#")]),t._v(" 1.什么是WXML")]),t._v(" "),s("p",[t._v("WXML (WeiXin Markup Language)是小程序框架设计的一套标签语言,用来构建小程序页面的结构，其作用类似于网页开发中的HTML。")]),t._v(" "),s("h3",{attrs:{id:"_2-wxml和html的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-wxml和html的区别"}},[t._v("#")]),t._v(" 2.WXML和HTML的区别")]),t._v(" "),s("p",[t._v("①标签名称不同")]),t._v(" "),s("ul",[s("li",[t._v("HTML (div, span, img, a)")]),t._v(" "),s("li",[t._v("WXML (view, text, image, navigator)")])]),t._v(" "),s("p",[t._v("②属性节点不同")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('<a href="#">超链接</a>')])]),t._v(" "),s("li",[s("code",[t._v('<navigator url="/pages/home/home"></ navigator>')])])]),t._v(" "),s("p",[t._v("③提供了类似于Vue中的模板语法")]),t._v(" "),s("ul",[s("li",[t._v("数据绑定")]),t._v(" "),s("li",[t._v("列表渲染")]),t._v(" "),s("li",[t._v("条件渲染")])]),t._v(" "),s("h2",{attrs:{id:"_4-wxss样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-wxss样式"}},[t._v("#")]),t._v(" 4.wxss样式")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是wxss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是wxss"}},[t._v("#")]),t._v(" 1.什么是WXSS")]),t._v(" "),s("p",[s("strong",[t._v("WXSS (WeiXin Style Sheets)是一套样式语言 ，用于描述WXML的组件样式，类似于网页开发中的CSS。")])]),t._v(" "),s("h3",{attrs:{id:"_2-wxss和css的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-wxss和css的区别"}},[t._v("#")]),t._v(" 2.wXss和CSS的区别")]),t._v(" "),s("p",[t._v("①新增了rpx尺寸单位")]),t._v(" "),s("ul",[s("li",[t._v("CSS中需要手动进行像素单位换算,例如rem")]),t._v(" "),s("li",[t._v("WXSS在底层支持新的尺寸单位rpx,在不同大小的屏幕上小程序会自动进行换算")])]),t._v(" "),s("p",[t._v("②提供了全局的样式和局部样式")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("项目根目录中的app.wxss会作用于所有小程序页面")])]),t._v(" "),s("li",[s("strong",[t._v("局部页面的.WXSS样式仅对当前页面生效")])])]),t._v(" "),s("p",[t._v("③WXSS 仅支持部分CSS选择器")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v(".class 和#id")])]),t._v(" "),s("li",[s("strong",[t._v("element")])]),t._v(" "),s("li",[s("strong",[t._v("并集选择器、后代选择器")])]),t._v(" "),s("li",[s("strong",[t._v("::after和::before等伪类选择器")])])]),t._v(" "),s("h2",{attrs:{id:"_5-小程序中的js文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-小程序中的js文件"}},[t._v("#")]),t._v(" 5.小程序中的js文件")]),t._v(" "),s("p",[t._v("一个项目仅仅提供界面展示是不够的,在小程序中，我们通过.js 文件来处理用户的操作。例如:响应用户的点击、获取用户的位置等等。")]),t._v(" "),s("p",[s("strong",[t._v("小程序中的JS文件分为三大类,分别是:")])]),t._v(" "),s("p",[t._v("①app.js")]),t._v(" "),s("ul",[s("li",[t._v("是整个小程序项目 的入口文件,通过调用App()函数来启动整个小程序")])]),t._v(" "),s("p",[t._v("②页面的.js 文件")]),t._v(" "),s("ul",[s("li",[t._v("是页面的入口文件, 通过调用Page()函数来创建并运行页面")])]),t._v(" "),s("p",[t._v("③普通的.js文件")]),t._v(" "),s("ul",[s("li",[t._v("是普通的功能模块文件，用来封装公共的函数或属性供页面使用")])]),t._v(" "),s("h2",{attrs:{id:"_6-宿主环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-宿主环境"}},[t._v("#")]),t._v(" 6.宿主环境")]),t._v(" "),s("h3",{attrs:{id:"_1-什么是宿主环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是宿主环境"}},[t._v("#")]),t._v(" 1.什么是宿主环境")]),t._v(" "),s("p",[t._v("宿主环境( host environment)指的是程序运行所必须的依赖环境。例如:")]),t._v(" "),s("p",[t._v("Android系统和ios系统是两个不同的宿主环境。安卓版的微信App是不能在ios环境下运行的,所以,Android是安卓软件的宿主环境，脱离了宿主环境的软件是没有任何意义的!")]),t._v(" "),s("h3",{attrs:{id:"_2-小程序的宿主环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序的宿主环境"}},[t._v("#")]),t._v(" 2.小程序的宿主环境")]),t._v(" "),s("p",[s("strong",[t._v("手机微信是小程序的宿主环境")])]),t._v(" "),s("p",[t._v("小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能，例如:")]),t._v(" "),s("p",[t._v("微信扫码、微信支付、微信登录、地理定位、etc...")]),t._v(" "),s("h3",{attrs:{id:"_3-小程序宿主环境包含的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-小程序宿主环境包含的内容"}},[t._v("#")]),t._v(" 3.小程序宿主环境包含的内容")]),t._v(" "),s("p",[t._v("①通信模型")]),t._v(" "),s("p",[t._v("②运行机制")]),t._v(" "),s("p",[t._v("③组件")]),t._v(" "),s("p",[t._v("④API")]),t._v(" "),s("h4",{attrs:{id:"_1-通信的主体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-通信的主体"}},[t._v("#")]),t._v(" 1.通信的主体")]),t._v(" "),s("p",[t._v("小程序中通信的主体是渲染层和逻辑层，其中:")]),t._v(" "),s("p",[t._v("①WXML模板和WXSS样式工作在渲染层")]),t._v(" "),s("p",[t._v("②JS 脚本工作在逻辑层")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/09/mUKLHTNRyBWA2p6.png",alt:"image-20220607172901872"}})]),t._v(" "),s("h4",{attrs:{id:"_2-小程序的通信模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-小程序的通信模型"}},[t._v("#")]),t._v(" 2.小程序的通信模型")]),t._v(" "),s("p",[t._v("小程序中的通信模型分为两部分:")]),t._v(" "),s("p",[t._v("①渲染层和逻辑层之间的通信")]),t._v(" "),s("ul",[s("li",[t._v("由微信客户端进行转发")])]),t._v(" "),s("p",[t._v("②逻辑层和第三方服务器之间的通信")]),t._v(" "),s("ul",[s("li",[t._v("由微信客户端进行转发")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/09/rh4PDboUSKiZuk5.png",alt:"image-20220607173125667"}})]),t._v(" "),s("h4",{attrs:{id:"_3-运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行机制"}},[t._v("#")]),t._v(" 3.运行机制")]),t._v(" "),s("h5",{attrs:{id:"_1-小程序启动的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序启动的过程"}},[t._v("#")]),t._v(" 1.小程序启动的过程")]),t._v(" "),s("p",[t._v("①把小程序的代码包下载到本地")]),t._v(" "),s("p",[t._v("②解析app.json全局配置文件")]),t._v(" "),s("p",[t._v("③执行app.js小程序入口文件，"),s("strong",[t._v("调用App()创建小程序实例")])]),t._v(" "),s("p",[t._v("④渲染小程序首页")]),t._v(" "),s("p",[t._v("⑤小程序启动完成")]),t._v(" "),s("h5",{attrs:{id:"_2-页面渲染的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面渲染的过程"}},[t._v("#")]),t._v(" 2.页面渲染的过程")]),t._v(" "),s("p",[t._v("①加载解析页面的.json配置文件")]),t._v(" "),s("p",[t._v("②加载页面的.wxml模板和.wsss样式")]),t._v(" "),s("p",[t._v("③执行页面的js文件，"),s("strong",[t._v("调用Page()创建页面实例")])]),t._v(" "),s("p",[t._v("④页面渲染完成")]),t._v(" "),s("h4",{attrs:{id:"_4-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-组件"}},[t._v("#")]),t._v(" 4.组件")]),t._v(" "),s("h5",{attrs:{id:"_1-小程序中组件的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-小程序中组件的分类"}},[t._v("#")]),t._v(" 1.小程序中组件的分类")]),t._v(" "),s("p",[t._v("小程序中的组件也是由宿主环境提供的，开发者可以基于组件快速搭建出漂亮的页面结构。官方把小程序的组件分为了9大类,分别是:")]),t._v(" "),s("p",[s("strong",[t._v("①视图容器")])]),t._v(" "),s("p",[s("strong",[t._v("②基础内容")])]),t._v(" "),s("p",[s("strong",[t._v("③表单组件")])]),t._v(" "),s("p",[s("strong",[t._v("④导航组件")])]),t._v(" "),s("p",[t._v("⑤媒体组件")]),t._v(" "),s("p",[t._v("⑥map 地图组件")]),t._v(" "),s("p",[t._v("⑦canvas 画布组件")]),t._v(" "),s("p",[t._v("⑧开放能力")]),t._v(" "),s("p",[t._v("⑨无障碍访问")]),t._v(" "),s("p",[t._v("注意：标黑的是常用的组件")]),t._v(" "),s("h5",{attrs:{id:"_2-常用的视图容器类组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用的视图容器类组件"}},[t._v("#")]),t._v(" 2.常用的视图容器类组件")]),t._v(" "),s("p",[t._v("①view")]),t._v(" "),s("ul",[s("li",[t._v("普通视图区域")]),t._v(" "),s("li",[t._v("类似于 HTML中的div,是一个块级元素")]),t._v(" "),s("li",[t._v("常用来实现页面的布局效果")])]),t._v(" "),s("p",[t._v("②scroll-view")]),t._v(" "),s("ul",[s("li",[t._v("可滚动的视图区域")]),t._v(" "),s("li",[t._v("常用来实现滚动列表效果")])]),t._v(" "),s("p",[t._v("③swiper 和swiper-item")]),t._v(" "),s("ul",[s("li",[t._v("轮播图容器组件和轮播图item组件")])]),t._v(" "),s("h5",{attrs:{id:"_3-view组件的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-view组件的基本使用"}},[t._v("#")]),t._v(" 3.view组件的基本使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--pages/list/list.wxml--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("B"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("C"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* pages/list/list.wxss */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("space"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("around"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aqua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view:nth-child(1)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view:nth-child(2)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",{attrs:{id:"_4-scorll-view组件的基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-scorll-view组件的基本使用"}},[t._v("#")]),t._v(" 4.scorll-view组件的基本使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--pages/list/list.wxml--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scroll-view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scroll-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("B"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("C"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scroll-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* pages/list/list.wxss */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* display: flex;\n    flex-direction: row;\n    justify-content:space-around; */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 180rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1rpx solid green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aqua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view:nth-child(1)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("view:nth-child(2)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("5.swiper组件的基本使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--pages/list/list.wxml--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("indicator-dots")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("indicator-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rgba(255,0,0,0.4)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autoplay")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("circular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("A"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("B"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("C"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("swiper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* pages/list/list.wxss */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 280rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1rpx solid green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("swiper-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 280rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 280rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("swiper-item:nth-child(1)")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aquamarine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("swiper-item:nth-child(2)")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bisque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("swiper-item:last-child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blueviolet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"swiper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swiper"}},[t._v("#")]),t._v(" swiper")]),t._v(" "),s("blockquote",[s("p",[t._v("基础库 1.0.0 开始支持，低版本需做"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("兼容处理"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("微信 Windows 版")]),t._v("：支持")]),t._v(" "),s("p",[s("strong",[t._v("微信 Mac 版")]),t._v("：支持")])]),t._v(" "),s("h6",{attrs:{id:"功能描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),s("p",[t._v("滑块视图容器。其中只可放置"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("swiper-item"),s("OutboundLink")],1),t._v("组件，否则会导致未定义的行为")]),t._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细用法看开发文档"),s("OutboundLink")],1)])]),t._v(" "),s("h5",{attrs:{id:"_5-更多的组件学习可以参照官方文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-更多的组件学习可以参照官方文档"}},[t._v("#")]),t._v(" 5.更多的组件学习可以参照官方文档")]),t._v(" "),s("p",[t._v("其实跟学习vue的组件没什么区别")])])}),[],!1,null,null,null);s.default=r.exports}}]);