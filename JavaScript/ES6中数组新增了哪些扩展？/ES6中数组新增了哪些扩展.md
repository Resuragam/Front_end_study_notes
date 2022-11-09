# ES6中数组新增了哪些扩展?

## 拓展运算符

`...`拓展运算符，将数组变成用逗号分隔的参数序列。

~~~javascript
console.log(...[1, ...[5,6], 2, 3, 4]) // 1,5,6,2,3,4

const arr = [1,2]
arr.push(...[3,4]) // [1,2,3,4] 
~~~

### 用法

1. 合并数组。

   > 合并数组。
   >
   > ~~~javascript
   > let arr1 = [1,2,3]
   > arr1 = arr1.concat(5,5,4) //ES5
   > arr1 = [...arr1, ...[5,5,4]] // ES6
   > console.log(arr1) // 1,2,3,5,5,4
   > ~~~

2. 与解构赋值结合。

   > ~~~javascript
   > const arr2 = [1,2,4,5,6,7]
   > const [first, ...rest] = arr2
   > console.log(first) // 1
   > console.log(rest) // 2,4,5,6,7
   > ~~~
   >
   > 数组当中的扩展运算符只能放在最后一位，否则报错。

3. 字符串。

   > 将字符串转化为真正的数组。
   >
   > ~~~javascript
   > const str = [...'hello']
   > console.log(str) // [ "h", "e", "l", "l", "o" ]
   > ~~~

4. 实现Iterator接口。

   >  将实现了Iterator接口的对象转化为数组。
   >
   > ~~~javascript
   > [...document.querySelectorAll('div')]
   > ~~~

5. Map、Set数据结构。

   > Map，Set数据结构内部实现了Iterator接口，因此可以使用拓展运算符。

6. Generator函数。

   > Generator函数执行后返回一个遍历器对象，因此也可以使用拓展运算符。
   >
   > ~~~javascript
   > const go = function* () {
   >     yield 1
   >     yield 2
   >     yield 3
   > }
   > console.log([...go()]) // [1,2,3]
   > ~~~

## 构造函数的新增方法

* Array.from()
* Array.of()

### Array.from()

将实现了Iterator接口的数据结构或者类数组对象转化为真正的对象。

~~~javascript
const likeArr = {
    '1':2,
    '2':3,
    '0':0,
    length:3
}
console.log(Array.from(likeArr)) // [0,2,3]
~~~

还可以接收mapfn参数，对每个元素进行处理在返回。

~~~javascript
console.log(Array.from(likeArr, (x) => {
    if(x === 2)
        return true
    else
        return false
})) //[ false, true, false ]
~~~

### Array.of()

将一组值，转化为数组。

~~~javascript
const arr1 = Array.of()
const arr2 = Array.of(1,2,3,4)
console.log(arr1) // []
console.log(arr2) // [1,2,3,4]
~~~

## 实例对象的新增方法

###  Array.prototype.copyWithin()

Array.prototype.copyWithin(target, start = 0, end = this.length)

* target 表示从该位置开始替换数据。
* start表示从该位置读取数据，如果为负数，需加上length。
* end表示当前位置停止读取数据。

~~~javascript
const arr = [1,2,3,4,5].copyWithin(0,3,4)
console.log(arr) // [4,2,3,4,5]
~~~

### Array.prototype.find()

find()方法找出第一个符合条件的数组成员，参数为一个回调函数，返回值为true。

如果没有符合条件的成员，返回undefined。

~~~javascript
const arr = [1,2,4,-1]
const num = arr.find((x) => x < 0 )
console.log(num) // -1
~~~

### Array.prototype.findIndex()

find()方法找出第一个符合条件的数组成员的位置，参数为一个回调函数，返回值为true。

如果没有符合条件的成员，返回-1。

~~~javascript
const index = arr.findIndex((x) => x < 0)
console.log(index) // 3
~~~

### Array.prototype.fill()

Array.prototype.fill(value, start = 0, end = this.length)

* value表示填充的定值。
* start表示从该位置填充数据，如果为负数，需加上length。
* end表示当前位置停止读取数据。

~~~javascript
const arr = [1,2,5,4]
arr.fill(1,0,2)
console.log(arr) // [1,1,5,4]
~~~

### Array.prototype.includes()

Array.prototype.includes(searchElement, fromIndex?)表示数组是否包含给定的值。

* searchElement表示搜索的参数。
* fromIndex表示搜索开始的范围。

~~~javascript
const arr = [1,2,34]
console.log(arr.includes(1)) // true
console.log(arr.includes(3)) // false
~~~

### flat(), flatMap()

flat() 将数组扁平化处理，返回一个新数组，对原数据没有影响。

接受一个参数，表示扁平化处理的层数。

~~~javascript
const arr = [1,2,[3,4,[5]]]
const arr1 = arr.flat()
const arr2 = arr.flat(2)
console.log(arr1)
console.log(arr2)
//[ 1, 2, 3, 4, [ 5 ] ]
//[ 1, 2, 3, 4, 5 ]x
~~~

### entries(), keys(), values()

entries()遍历键值对, keys()遍历键, values()遍历值。

均返回一个遍历器对象，可以使用for...of进行遍历。

~~~javascript
const arr = [1,2]
for (let key of arr.keys())
    console.log(key)
// 0
// 1

for (let key of arr.values())
    console.log(key)
// 1
// 2

for (let [index, value] of arr.entries())
    console.log(index, value)
// 0 1
// 1 2
~~~

## 空值处理

数组的空位是指数组的某一处没有具体值，此时空位转为undefined。

应避免使用空位。

## sort()排序算法

 将sort()默认设置为稳定的排序算法 。