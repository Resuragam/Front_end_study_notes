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

## 三种事件模型是什么

## 说说你对闭包的理解，以及闭包使用场景

闭包是一个函数与周围状态的捆绑集合，闭包可以帮助你从内层函数访问到外层函数的作用域。

~~~javascript
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
~~~

闭包的特征：

* 函数当中嵌套函数
* 内部函数使用外部函数的参数和变量
* 参数和变量不会被垃圾回收机制回收

闭包的优点：

* 希望一个变量长期存储在内存当中
* 避免全局变量污染
* 私有成员的存在

闭包的缺点：

* 常驻内存，增加了内存的使用量
* 使用不当容易造成内存泄漏

## 什么是作用域链？

作用域，即变量和函数生效的区域或者集合，作用域决定了代码块中变量以及函数的可见性

~~~javascript
function myFunction() {
    let inVariable = "函数内部变量";
}
myFunction();//要先执行这个函数，否则根本不知道里面是啥
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined
~~~

作用域的划分：

* 全局作用域
* 块级作用域
* 函数作用域（局部作用域）

全局作用域：不在函数或者大括号当中创建的变量都在全局作用域当中。

~~~javascript
// 全局变量
var greeting = 'Hello World!';
function greet() {
  console.log(greeting);
}
// 打印 'Hello World!'
greet();
~~~

函数作用域：当一个变量在一个函数当中声明，那么它就在函数作用域当中，只能在函数内部访问，不能在函数以外访问

~~~javascript
function greet() {
  var greeting = 'Hello World!';
  console.log(greeting);
}
// 打印 'Hello World!'
greet();
// 报错： Uncaught ReferenceError: greeting is not defined
console.log(greeting);
~~~

块级作用域：ES6引入了`let`和`const`关键字,和`var`关键字不同，在大括号中使用`let`和`const`声明的变量存在于块级作用域中。在大括号之外不能访问这些变量

~~~javascript
{
  // 块级作用域中的变量
  let greeting = 'Hello World!';
  var lang = 'English';
  console.log(greeting); // Prints 'Hello World!'
}
// 变量 'English'
console.log(lang);
// 报错：Uncaught ReferenceError: greeting is not defined
console.log(greeting);
~~~

词法作用域，又叫静态作用域，变量被创建时就确定好了，而非执行阶段确定的。也就是说我们写好代码时它的作用域就确定了，`JavaScript` 遵循的就是词法作用域。

~~~~javascript
var a = 2;
function foo(){
    console.log(a)
}
function bar(){
    var a = 3;
    foo();
}
n()
~~~~

作用域链：当在`Javascript`中使用一个变量的时候，首先`Javascript`引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域。

如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错。

##  JavaScript中的原型，原型链分别是什么?

原型：每个函数都有一个prototype属性，被称为原型。

可以存放一些属性和方法，同时可以实现JavaScript的继承。

对象都有一个`_proto_`属性，这个属性指向它的原型对象。原型对象也是对象，也有`_proto_`属性，指向原型对象的原型对象，这样一层层的链式结构被称为原型链，直到最顶层为null。

## Javascript如何实现继承？

继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码

在子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能

首先定义一个Car类，然后定义Car类相关的属性

~~~javascript
class Car{
    constructor(color,speed){
        this.color = color
        this.speed = speed
        // ...
    }
}
~~~

~~~javascript
// 货车
class Truck extends Car{
    constructor(color,speed){
        super(color,speed)
        this.color = 'black'
        this.Container = true // 货箱
    }
}
~~~

货车继承汽车的同时，重新定义汽车的某些属性，从而获得与父类不同的方法。

### 继承的实现方式

* 原型链继承

  ~~~javascript
   function Parent() {
      this.name = 'parent1';
      this.play = [1, 2, 3]
    }
    function Child() {
      this.type = 'child2';
    }
    Child1.prototype = new Parent();
    console.log(new Child())
  ~~~

  ~~~javascript
  var s1 = new Child()
  var s2 = new Child()
  s2.play.push(4)
  console.log(s1.play) // 1 2 3 4
  ~~~

  原型链继承创建的子类都继承自同一个原型对象，因此内存空间共享，会造成属性值混乱。

* 构造函数继承

  ~~~javascript
  function Parent(){
      this.name = 'parent1';
  }
  
  Parent.prototype.getName = function () {
      return this.name;
  }
  
  function Child(){
      Parent1.call(this);
      this.type = 'child'
  }
  
  let child = new Child();
  console.log(child);  // 没问题
  console.log(child.getName());  // 会报错
  ~~~

  父类原型对象中一旦存在父类之前自己定义的方法，那么子类将无法继承这些方法

* 组合继承

  组合继承总结了上述两种方法，但是增加了性能开销。

* 原型式继承

  这里主要借助`Object.create`方法实现普通对象的继承

  ~~~javascript
  let parent4 = {
      name: "parent4",
      friends: ["p1", "p2", "p3"],
      getName: function() {
        return this.name;
      }
    };
  
    let person4 = Object.create(parent4);
    person4.name = "tom";
    person4.friends.push("jerry");
  
    let person5 = Object.create(parent4);
    person5.friends.push("lucy");
  
    console.log(person4.name); // tom
    console.log(person4.name === person4.getName()); // true
    console.log(person5.name); // parent4
    console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
    console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
  ~~~

  这种继承方式的缺点也很明显，因为`Object.create `方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能

* 寄生式继承

  优缺点与上述一样，数据容易被篡改

使用`ES6` 中的`extends `关键字直接实现 `JavaScript `的继承。

