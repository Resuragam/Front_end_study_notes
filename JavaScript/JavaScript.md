# JavaScript

## JavaScript 基本数据类型

> JavaScript 一共有六种基本数据类型。其中有 string, number, undefined, null, boolean, 在ES6当中新增了Symbol类型，表示创建之后独一无二，不可变化的数据类型。

## var、let、const之间有什么区别？

* let和const是块级作用域，而var是函数作用域。
* let和const不可以重复声明变量，var可以。
* var存在变量提升，而let、const在声明之前不可以使用，被称为“暂时性死区”（TDZ）

### 