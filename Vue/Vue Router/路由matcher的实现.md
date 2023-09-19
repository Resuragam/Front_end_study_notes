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

![[./image/Vue Router/createRourerMatcher源码.webp]]

### addRoute方法

#### 标准化record和合并options

```ts
// used later on to remove by name
    const isRootAdd = !originalRecord
    // 对路由项 record 进行标准化
    const mainNormalizedRecord = normalizeRouteRecord(record)
    if (__DEV__) {
      checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent)
    }
    // we might be the child of an alias
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record
    const options: PathParserOptions = mergeOptions(globalOptions, record)
    // generate an array of records to correctly handle aliases
    const normalizedRecords: (typeof mainNormalizedRecord)[] = [
      mainNormalizedRecord,
    ]
```

首先会调用`normalizeRouteRecord`对`record`进行标准化处理，这里的`normalizeRouteRecord`的方法本质其实是将传入的`record`转化为一个标准的`matcher`数组元素。

```ts
export function normalizeRouteRecord(
  record: RouteRecordRaw
): RouteRecordNormalized {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: undefined,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in record
        ? record.components || null
        : record.component && { default: record.component },
  }
}
```

`mainNormalizedRecord.aliasOf`属性定义了是否这条记录是另一条的别名。如果记录是原始记录，则该属性为`undefined`。

`mergeOptions`方法主要是合并传入的全局参数`globalOptions`和自身路由记录`record`的配置。

```ts
function mergeOptions<T extends object>(
  defaults: T,
  partialOptions: Partial<T>
): T {
  const options = {} as T
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key]! : defaults[key]
  }
  return options

}
```

因此会先判断全局配置`globalOptions`是否存在当前配置属性，如果`globalOptions`不存在，即使子路由表配置也会无效，如果存在，会优先使用子路由表`record`的配置。