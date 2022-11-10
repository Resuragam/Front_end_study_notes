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
const obj = {
    name: 'test',
    // Symbol属性
    [Symbol('age')]: 18
}

const obj1 = {
    money: 250
}

// 设置obj的原型对象
Object.setPrototypeOf(obj,obj1)

// 设置对象中不可枚举的属性
Object.defineProperty(obj, 'like', {
    value: "coding",
    enumerable: false
});

// Object.keys()方法遍历
console.log(Object.keys(obj)) // name
~~~

* for...in

> 循环遍历对象自身的和原型上继承的可枚举属性（不含 Symbol 属性）。

~~~javascript
// for..in遍历自身以及原型上继承的可枚举属性
for (let key in obj) {
    console.log(key)
}
// name
// money
~~~

- Object.getOwnPropertyNames()

> 返回一个数组,包含对象自身的所有属性（不含 Symbol 属性,但是包括不可枚举属性）。

~~~javascript
// Object.getOwnPropertyNames()获取自身所有属性
console.log(Object.getOwnPropertyNames(obj))
// [ 'name', 'like' ]
~~~

* Reflect.ownKeys()

> 返回一个数组,包含对象自身的所有属性(包括 Symbol 属性和不可枚举属性).

~~~javascript
// Reflect.ownKeys()获取对象自身的所有属性
console.log(Reflect.ownKeys(obj))//[ 'name', 'like', Symbol(age) ]
~~~

| 方法                         | 特点                                               |
| ---------------------------- | -------------------------------------------------- |
| Object.keys()                | 自身的可枚举属性，不包括Symbol                     |
| for...in                     | 自身的可枚举属性以及继承的可枚举属性，不包括Symbol |
| Object.getOwnPropertyNames() | 自身的全部属性，包括不可枚举，不包括Symbol         |
| Reflect.ownKeys()            | 自身全部属性，包括不可枚举和Symbol                 |

## Js 遍历数组的方法

* forEach()

~~~javascript
const arr = [1,2,3]

arr.forEach((item, index,array) => {
    console.log(item,index)
})
// 1 0
// 2 1
// 3 2
~~~

* for...in

> for...in方法遍历数组的索引

~~~javascript
for(let key in arr) {
    console.log(arr[key])
}
// 1
// 2
// 3
~~~

* for...of

> for...of方法遍历数组的元素

~~~javascript
for(let item of arr) {
    console.log(item)
}
// 1
// 2
// 3
~~~

## for...in 与 for...of 的区别

for...in 会遍历对象或者数组的可迭代属性，包括原型上的属性。如果不想遍历原型上的方法或者属性，可以在遍历时进行判断，根据 hasOwnProperty() 方法判断该属性是否存在该对象上面。

for...of 会遍历数组/字符串/map/set等实现了迭代器（Iterator）的集合。但是无法遍历对象。

总结：for...in 是遍历数组的索引，而 for...of 是遍历数组的元素；for...in 总是得到对象的 key 或数组、字符串的下标；for...of 总是得到对象的 value 或数组、字符串的值。

## map weakMap set weakSet 区别

weakMap 键名只能为对象（null除外），map的键名可以为任意值。

weakMap 的键名为弱引用，不被垃圾回收机制考虑，一旦外部的引用被清除，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

weakMap 不可以遍历，map 可以遍历。

## null 和 undefined 的区别

null 和 undefined 都是基本引用类型，并且只有唯一值，分别是 null 和 undefined 。

undefined 表示未定义，null 表示空对象。变量声明但未定义之后为 undefined ，而 null 只要用于对象的初始化操作。

当我们对两种类型进行 typeof 操作时，null 会被转化为 object 。

undefined==null(true)` `undefined===null(false)`

## 其他值到字符串的转换规则

（1）null 和 undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，

（2）Boolean 类型，true 转换为 "true"，false 转换为 "false"。

（3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

（4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。

（5）对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）

## 其他值到布尔类型的值的转换规则

* undefined
* null
* +0 -0 
* false
* ""

假值的布尔强制类型为false，列表之外的为真值。

## {} 和 [] 的 valueOf 和 toString 的结果是什么

{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""

## || 和 && 操作符的返回值

|| 如果第一个操作数条件判断结果为 true就返回第一个操作数的值，如果为 false就返回第二个操作数的值。 

&& 如果第一个操作数条件判断结果为 true就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。 

## == 操作符的强制类型转换规则

（1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。

（2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。

（3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。

（4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。

（5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。

（6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。

## 如何将字符串转化为数字，例如 '12'

（1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。

（2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

（3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。 

