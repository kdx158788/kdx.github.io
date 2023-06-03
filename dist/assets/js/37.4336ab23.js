(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{447:function(t,_,v){"use strict";v.r(_);var s=v(0),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),_("p",[t._v("axios 源码分析，只进行了简单了解，没有深入")])]),t._v(" "),_("h1",{attrs:{id:"axios-源码分析-李立超"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#axios-源码分析-李立超"}},[t._v("#")]),t._v(" axios 源码分析——李立超")]),t._v(" "),_("h2",{attrs:{id:"_1-http-相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-相关"}},[t._v("#")]),t._v(" 1.http 相关")]),t._v(" "),_("p",[_("strong",[t._v("1.MDN 文档")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP | MDN (mozilla.org)"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("2.http 请求交互过程")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2022/07/13/bhqmjUfBOgX4n1Q.png",alt:"image-20220713175517115"}})]),t._v(" "),_("ol",[_("li",[t._v("前后应用 从浏览器端向服务器发送 HTTP 请求(请求报文)")]),t._v(" "),_("li",[t._v("后台服务器接收到请求后，调度服务器应用处理请求,向浏览器端返回 HTTP 响应(响应报文)")]),t._v(" "),_("li",[t._v("浏览器端接收到响应,解析显示响应体/调用监视回调")])]),t._v(" "),_("p",[_("strong",[t._v("3.http 请求报文")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("请求行")]),t._v(" "),_("p",[t._v("method url")]),t._v(" "),_("p",[t._v("GET /product_ detail?id=2")]),t._v(" "),_("p",[t._v("POST /login")])]),t._v(" "),_("li",[_("p",[t._v("多个请求头")]),t._v(" "),_("p",[t._v("Host: www.baidu.com")]),t._v(" "),_("p",[t._v("Cookie: BAIDUID= AD3B0FA706E; BIDUPSID= AD3B0FA706;")]),t._v(" "),_("p",[t._v("Content- Type: application/x-www-form-urlencoded 或者 application/jison")])]),t._v(" "),_("li",[_("p",[t._v("请求体")]),t._v(" "),_("p",[t._v("username=' tom&pwd=123")]),t._v(" "),_("p",[t._v('{"username": "tom", "pwd": 123}')])])]),t._v(" "),_("p",[_("strong",[t._v("4.http 响应报文")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("响应状态行: status statusText")])]),t._v(" "),_("li",[_("p",[t._v("多个响应头")]),t._v(" "),_("p",[t._v("Content- Type: text/html;charset=utf-8")]),t._v(" "),_("p",[t._v("Set-Cookie: BD* .CK* SAM= 1;path=/")])]),t._v(" "),_("li",[_("p",[t._v("响应体")]),t._v(" "),_("p",[t._v("html 文本/json 文本/js/css/图片..")])])]),t._v(" "),_("p",[_("strong",[t._v("5.post 请求体参数格式")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("Content-Type: application/x www-form-urlencoded;charset=utf-8")]),t._v(" "),_("p",[t._v("用于键值对参数，参数的键值用=连接,参数之间用&连接")]),t._v(" "),_("p",[t._v("例如: name=%E5%B0%8F%E6%98%8E&age=12")])]),t._v(" "),_("li",[_("p",[t._v("Content-Type: application/json;charset=utf-8")]),t._v(" "),_("p",[t._v("用于 json 字符串参数")]),t._v(" "),_("p",[t._v('例如: {"name": "%E5%B0%8F%E6%98%8E" , "age": 12}')])]),t._v(" "),_("li",[_("p",[t._v("Content-Type: multipart/form-data")]),t._v(" "),_("p",[t._v("传输文件，文件上传")])])]),t._v(" "),_("p",[_("strong",[t._v("6.常见的响应状态码")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("200 OK\t\t\t\t\t\t请求成功。一般用于GET与POST请求\n201 Created\t\t\t\t\t已创建。成功请求并创建了新的资源\n401 Unauthorized\t\t\t未授权/请求要求用户的身份认证\n404 Not Found\t\t\t\t服务器无法根据客户端的请求找到资源\n500 Internal Server Error\t服务器内部错误，无法完成请求\n")])])]),_("p",[_("strong",[t._v("7.不同类型的请求及其作用")])]),t._v(" "),_("ol",[_("li",[t._v("GET:从服务器端读取数据")]),t._v(" "),_("li",[t._v("POST:向服务器端添加新数据")]),t._v(" "),_("li",[t._v("PUT: 更新服务器端已经数据")]),t._v(" "),_("li",[t._v("DELETE:删除服务器端数据")])]),t._v(" "),_("p",[_("strong",[t._v("8.API 的分类")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("REST API: restful")]),t._v(" "),_("p",[t._v("(1)发送请求进行 CRUD 哪个操作由请求方式来决定")]),t._v(" "),_("p",[t._v("(2)同一个请求路径可以进行多个操作")]),t._v(" "),_("p",[t._v("(3)请求方式会用到 GET/POST/PUT/DELETE")])]),t._v(" "),_("li",[_("p",[t._v("非 REST API: restless")]),t._v(" "),_("p",[t._v("(1)请求方式不决定请求的 CRUD 操作")]),t._v(" "),_("p",[t._v("(2)一个请求路径只对应一个操作")]),t._v(" "),_("p",[t._v("(3) 一般只有 GET/POST")])])]),t._v(" "),_("h2",{attrs:{id:"_2-xhr-的理解和使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-xhr-的理解和使用"}},[t._v("#")]),t._v(" 2.xhr 的理解和使用")]),t._v(" "),_("p",[_("strong",[t._v("一般请求和 ajax 请求的区别")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("ajax 请求是一种特别的 http 请求")])]),t._v(" "),_("li",[_("p",[t._v("对服务器端来说, 没有任何区别,区别在浏览器端")])]),t._v(" "),_("li",[_("p",[t._v("浏览器端发请求:只有 XHR 或 fetch 发出的才是 ajax 请求,其它所有的都是非 ajax 请求")])]),t._v(" "),_("li",[_("p",[t._v("浏览器端接收到响应")]),t._v(" "),_("p",[t._v("(1) 一般请求:浏览器一般会直接显示响应体数据,也就是我们常说的刷新/跳转页面")]),t._v(" "),_("p",[t._v("(2)ajax 请求:浏览器不会对界面进行任何更新操作，只是调用监视的回调函数并传入响应相关数据")])])]),t._v(" "),_("h2",{attrs:{id:"_3-axios-features"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-axios-features"}},[t._v("#")]),t._v(" 3.axios features")]),t._v(" "),_("ol",[_("li",[t._v("基本 promise 的异步 ajax 请求库")]),t._v(" "),_("li",[t._v("浏览器端/node 端都可以使用")]),t._v(" "),_("li",[t._v("支持请求/响应拦截器")]),t._v(" "),_("li",[t._v("支持请求取消")]),t._v(" "),_("li",[t._v("请求/响应数据转换")]),t._v(" "),_("li",[t._v("批量发送多个请求")])]),t._v(" "),_("h3",{attrs:{id:"_1-axios-常用语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-axios-常用语法"}},[t._v("#")]),t._v(" 1.axios 常用语法")]),t._v(" "),_("p",[_("code",[t._v("axios(config)")]),t._v(":通用/最本质的发任意类型请求的方式")]),t._v(" "),_("p",[_("code",[t._v("axios(url[, config)")]),t._v(":可以只指定 url 发 get 请求")]),t._v(" "),_("p",[_("code",[t._v("axios.request(config)")]),t._v(":等同于 axios(config)")]),t._v(" "),_("p",[_("code",[t._v("axios.get(url[ ,config])")]),t._v(":发 get 请求")]),t._v(" "),_("p",[_("code",[t._v("axios.post(url[, data, config])")]),t._v(":发 post 请求")]),t._v(" "),_("p",[_("code",[t._v("axios.put(url[, data, config])")]),t._v(":发 put 请求")]),t._v(" "),_("p",[_("code",[t._v("axios.defaults.xxx")]),t._v(":请求的默认全局配置")]),t._v(" "),_("p",[_("code",[t._v("axios.interceptors.request.use()")]),t._v(":添加请求拦截器")]),t._v(" "),_("p",[_("code",[t._v("axios.interceptors.response.use()")]),t._v(":添加响应拦截器")]),t._v(" "),_("p",[_("code",[t._v("axios.create([config])")]),t._v(":创建个 新的 axios(它没有下面的功能)")]),t._v(" "),_("p",[t._v("新版本可以用**"),_("code",[t._v("AbortController")]),t._v("**来取消请求")]),t._v(" "),_("p",[_("code",[t._v("axios.Cancel()")]),t._v(":用于创建取消请求的错误对象")]),t._v(" "),_("p",[_("code",[t._v("axios.CancelToken()")]),t._v(":用于创建取消请求的 token 对象")]),t._v(" "),_("p",[_("code",[t._v("axios.isCancel()")]),t._v(":是否是一个取消请求的错误")]),t._v(" "),_("p",[_("code",[t._v("axios. all(promises)")]),t._v(":用于批量执行多个异步请求")]),t._v(" "),_("h3",{attrs:{id:"_2-难点语法及理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-难点语法及理解"}},[t._v("#")]),t._v(" 2.难点语法及理解")]),t._v(" "),_("p",[_("strong",[t._v("1.axios.create(config)")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("根据指定配置创建-一个新的 axios,也就就每个新 axios 都有自己的配置")])]),t._v(" "),_("li",[_("p",[t._v("新 axios 只是没有取消请求和批量发请求的方法，其它所有语法都是一-致的")])]),t._v(" "),_("li",[_("p",[t._v("为什么 要设计这个语法?")]),t._v(" "),_("p",[t._v("(1)需求:项目中有部分接口需要的配置与另一部分接口需要的配置不太一样,如何处理")]),t._v(" "),_("p",[t._v("(2)解决:创建 2 个新 axios,每个都有自己特有的配置,分别应用到不同要求的接口请求中")])])]),t._v(" "),_("p",[_("strong",[t._v("2.请求响应拦截器")])]),t._v(" "),_("p",[_("strong",[t._v("axios.interceptor")])]),t._v(" "),_("h2",{attrs:{id:"_4-源码分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-源码分析"}},[t._v("#")]),t._v(" 4.源码分析")]),t._v(" "),_("h3",{attrs:{id:"_1-axios-与-axios-的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-axios-与-axios-的关系"}},[t._v("#")]),t._v(" 1.axios 与 Axios 的关系?")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("从语法上来说: axios 不是 Axios 的实例")])]),t._v(" "),_("li",[_("strong",[t._v("从功能 上来说: axios 是 Axios 的实例")])]),t._v(" "),_("li",[_("strong",[t._v("axios 是 Axios.prototype.request 函数 bind()返回的函数")])]),t._v(" "),_("li",[_("strong",[t._v("axios 作为对象有 Axios 原型对象上的所有方法，有 Axios 对象上所有属性")])])]),t._v(" "),_("p",[t._v("其实 axios 把 Axios 实例上的功能都 copy 过来了，最终 axios 在功能上是 axios 的实例")]),t._v(" "),_("h3",{attrs:{id:"_2-instance-与-axios-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-instance-与-axios-的区别"}},[t._v("#")]),t._v(" 2.instance 与 axios 的区别?")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("相同:")])]),t._v(" "),_("p",[_("strong",[t._v("(1)都是一一个能发任意请求的函数: requst(confg)")])]),t._v(" "),_("p",[_("strong",[t._v("(2)都有发特定请求的各种方法: get(/post()/put()/delete()")])]),t._v(" "),_("p",[_("strong",[t._v("(3)都有默认配置和拦截器的属性: defaults/interceptors")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("不同:")])]),t._v(" "),_("p",[_("strong",[t._v("(1)默认匹配的值很可能不一一样")])]),t._v(" "),_("p",[_("strong",[t._v("(2) instance 没有 axios 后面添加的一. 些方法: create()/CancelToken()/all()")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-执行流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行流程"}},[t._v("#")]),t._v(" 3.执行流程")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2022/07/17/bRaFE23wjJWqxcn.png",alt:"image-20220717171154218"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2022/07/17/bKYovtjQ4Z3WFmw.png",alt:"image-20220717171553291"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2022/07/17/EKfkVwRX8Ne6lyU.png",alt:"image-20220717171724595"}})]),t._v(" "),_("p",[_("strong",[t._v("1.整体流程:")]),t._v(" "),_("strong",[t._v("request(config) ==> dispatchRequest(config) ==> xhrAdapter(config)")])]),t._v(" "),_("p",[_("strong",[t._v("请求拦截器后添加先执行，因为在将请求拦截器，请求，响应拦击器串联成 promise 链时，串联请求拦截器用的是 unshift 方法，所以顺序被倒置了")])]),t._v(" "),_("img",{attrs:{src:"https://s2.loli.net/2022/07/18/7qJMFbL4kKBCmIt.png",alt:"image-20220718073645316"}}),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[t._v("request(config):连接流程")]),t._v(" "),_("p",[t._v("将请求拦截器/ dispatchRequest()/响应拦截器通过 promise 链串连起来,返回 promise")])]),t._v(" "),_("li",[_("p",[t._v("dispatchRequest(config):处理数据")])])]),t._v(" "),_("p",[t._v("​ 转换请求数据 ==> 调用 xhrAdapter()发请求 ==> 请求返回后转换响应数据.返回 promise")]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("xhrAdapter(config):发起请求")])]),t._v(" "),_("p",[t._v("​ 创建 XHR 对象,根据 config 进行相应设置,发送特定请求,并接收响应数据,返回 promise")]),t._v(" "),_("h3",{attrs:{id:"_4-如何取消未完成的请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何取消未完成的请求"}},[t._v("#")]),t._v(" 4. 如何取消未完成的请求?")]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("当配置了 cancelToken 对象时,保存 cancel 函数")])]),t._v(" "),_("p",[_("strong",[t._v("(1)创建一个用于将来中断请求的 cancelPromise")])]),t._v(" "),_("p",[_("strong",[t._v("(2)并定义了一个用于取消请求的 cancel 函数")])]),t._v(" "),_("p",[_("strong",[t._v("(3)将 cancel 函数传递出来")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("调用 cancel()取消请求")])]),t._v(" "),_("p",[_("strong",[t._v("(1)执行 cacel 函数,传入错误信息 message")])]),t._v(" "),_("p",[_("strong",[t._v("(2)内部会让 cancelPromise 变为成功，且成功的值为- - 个 Cancel 对象")])]),t._v(" "),_("p",[_("strong",[t._v("(3)在 cancelPromise 的成功回调中中断请求，并让发请求的 proimse 失败,失败的 reason 为 Cacel 对象")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);