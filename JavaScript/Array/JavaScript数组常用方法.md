# JavaScript数组常用方法

JavaScript数组常用方法直接分为改变原数组方法和不改变原数组方法。

## 一、改变原数组方法

### 1. push() 末尾添加数据

**`push()`** 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

#### 语法

```js
push()
push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)
```

#### 返回值

新数组的长度，`length`属性。

#### 示例

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### 2. pop() 末尾删除数据

**`pop()`** 方法从数组中删除**最后一个**元素，并返回该元素的值。此方法会更改数组的长度。

#### 语法

```js
pop()
```

#### 返回值

从数组中删除的元素（当数组为空时返回 `undefined`）。

#### 示例

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'
```

