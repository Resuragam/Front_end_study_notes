# 路由matcher的实现原理
本文主要介绍`vue-router@4.x`中的`router matcher`的实现。

在官方文档当中，`vue-router`的创建需要调用`createRouter`方法，并且传入配置项`options`,返回一个`router`实例对象。
## createRouter

```js
const router = createRouter(options)
```

|名称|类型|描述|
|---|---|---|
|`options`|[`RouterOptions`](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html)|[RouterOptions](https://router.vuejs.org/zh/api/interfaces/RouterOptions.html)|

`createRouter`方法第一步会根据传入的路由配置列表，为每一项创建**matcher**，`matcher`表示每一个路由页面的匹配器，包含路由的常规方法。而内部需要创建`matcher`则需要调用``
`createRouterMatcher`方法。
## createRouterMatcher

`craeteRouterMacther`方法需要传入两个参数，第一个参数是路由配置项的路由表（`options.route`），第二个参数是路由配置项（`options`）。返回`{ addRoute, resolve, removeRoute, getRoutes, getRecordMatcher }`五个方法。这五个方法就是围绕`matcher`进行增删改查操作。

## createRouterMatcher执行过程

`createRouterMatcher`方法首先定义了`matchers`和`matcherMap`两个变量，分别存储`matcher`对象和（TODO: matcherMap的作用）。定义了 `getRecordMatcher`，`addRoute`，`removeRoute`，`getRoutes`，`insertMatcher`和`resolve`一共六个方法。主要遍历路由表调用`addRoute`实现`matcher`的生成，最终返回`{ addRoute, resolve, removeRoute, getRoutes, getRecordMatcher }`帮助`matcher`进行增删改查的操作。

![[createRourerMatcher源码.webp]]


