# Vue

##  说说你对Vue的理解?

Vue是一套构建用户界面的渐进式MVVM框架，渐进式是指强制主张少。

Vue.js包含了声明式渲染、组件化系统、客户端路由、大规模状态管理、构建工具、数据持久化、跨平台支持等，但在实际开发中，并没有强制要求开发者之后某一特定功能，而是根据需求逐渐扩展。

Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。

### 核心特性

* 数据驱动

  MVVM实现了数据驱动模型，更好的实现了前后端分离

  Model: 模型层，负责业务逻辑以及与服务端交互

  View：视图层，负责将数据模型转化为UI模型进行展示

  ViewModel：视图模型层，连接模型层和视图层

  特点:

  - View的变化会自动更新到viewModel；
  - viewModel的变化也会自动同步到view上显示；
  - 这种同步是因为viewModel中的属性实现了observer(观察者)
  - 当属性变更都能触发对应的操作；

* 组件化

  在`Vue`中每一个`.vue`文件都可以视为一个组件 

  优点：

  - 降低了耦合度。
  - 调试更加方便，因为每个组件职责单一，可以快速定位谁出了问题。
  - 提高可维护性。每个组件职责单一，并且组件在系统中可以复用，对组件进行优化可获得系统的整体升级

* 指令系统

  * 条件渲染指令 `v-if`
  * 列表渲染指令`v-for`
  * 属性绑定指令`v-bind`
  * 事件绑定指令`v-on`
  * 双向数据绑定指令`v-model`