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

