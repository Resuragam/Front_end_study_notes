## Vue基础

### 1. Vue的原理

当一个组件实例被创建时，`Vue`会遍历`data`中的属性，并通过`Object.defineProperty()`（`Vue3`中使用`Proxy`）设置相应的`setter`和`getter`，在内部追踪相关的依赖，在组件被访问和修改时通知变化。每个组件都有相应的`watcher`实例，它会在组件渲染的过程中把属性记录为依赖，之后每当依赖项的`setter`调用时，会通知`watcher`重新计算，致使与它关联的组件进行更新。

![0_tB3MJCzh_cB6i3mS-1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1b16025a35b4cd2b343a92e740621b7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

### 2. 双向数据绑定的原理

### 3. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

* `Vue2`中使用`Object.defineProperty()`方法进行数据劫持，需要对各个属性进行重写，添加`setter`和`getter`方法，遇到对象深层嵌套，需要递归遍历，开销较大。
* 数组不采用`Object.defineProperty()`方法进行劫持，浪费性能，需要对数组单独处理，并且重写数组的相关方法。
* `Object.defineProperty()`方法不支持ES6中的`Set`，`Map`数据类型结构进行响应式代理。
* `Object.defineProperty()`方法对对象新增或者删除属性无法监控到变化，需要调用`Vue2`中的`set`和`delete`方法进行响应式处理。

在`Vue3`中通过`Proxy`对对象进行代理，实现数据劫持。该方法唯一的缺点就是兼容性问题。

### 27. Vue是如何收集依赖的

* 在`Vue2`中，每一个`Vue`组件初始化时，会调用`$mount`方法进行挂载，在模板编译的过程中，会执行`defineReactive()`方法对数据进行响应式操作。每一个属性都对应一个`dep`存放所依赖的`watcher`。默认在渲染的过程中会获取响应式数据触发`getter`方法，内部执行`dep.depend()`方法收集依赖。当数据更新时，会触发`setter`方法，内部执行`dep.notify()`方法更新数据。

* 在`Vue3`中，会通过`WeakMap`对象将每一个属性和`effect`进行映射，在属性被读取时触发`getter`方法，内部执行`track()`方法收集依赖，在数据更新时，会找到对应的`effect`对象，执行`trigger()`方法进行更新。