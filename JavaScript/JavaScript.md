# JavaScript

## Js 基本数据类型

> JavaScript 一共有六种基本数据类型。其中有 string, number, undefined, null, boolean, 在ES6当中新增了Symbol类型，表示创建之后独一无二，不可变化的数据类型。

## var、let、const之间有什么区别？

* let和const是块级作用域，而var是函数作用域。
* let和const不可以重复声明变量，var可以。
* var存在变量提升，而let、const在声明之前不可以使用，被称为“暂时性死区”（TDZ）

## Js 遍历对象的方法

* Object.keys()

> 返回一个数组，包括对象自身当中所有的可枚举的属性（不包括继承的和Symbol）。

~~~javascript

~~~

* for...in

> 循环遍历对象自身的和原型上继承的可枚举属性（不含 Symbol 属性）。

~~~javascript

~~~

- Object.getOwnPropertyNames()

> 返回一个数组,包含对象自身的所有属性（不含 Symbol 属性,但是包括不可枚举属性）。

~~~javascript

~~~

* Reflect.ownKeys()

> 返回一个数组,包含对象自身的所有属性(包括 Symbol 属性和不可枚举属性).

~~~javascript

~~~



