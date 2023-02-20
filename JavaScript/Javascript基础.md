### 1. new 操作符的实现基础

* 首先创建一个新对象
* 设置原型，将对象的原型设置为函数的prototype对象
* 修改this指向，将函数的this指向改为新对象，并且执行构造函数
* 判断函数的返回类型，如果是原始值类型，会被忽略，返回创建的对象，如果是引用数据类型，则返回引用数据类型对象

~~~javascript
function myNew() {
    // 1. 创建一个新对象
    let newObject = null
    let result = null
    console.log(arguments)
    // 2. 设置原型属性
    let constructor =  Array.prototype.shift.call(arguments)
    if(typeof constructor !== 'function') {
        console.log('type error')
        return
    }
    // 新建一个对象，对象的原型为构造函数的prototype
    newObject = Object.create(constructor.prototype)
    // 3. 修改this指向，执行构造函数
    result = constructor.apply(newObject,arguments)
    // 4. 判断result的类型
    let flag = result && (typeof result === "object" || typeof result === "function")
    return flag ? result : newObject
}
~~~

### 2. Map和Object的区别

* 意外的键
  Map默认情况只有自身显示增加的键，Object可能存在与原型链上的键名相冲突

* 键的类型

  Map的键名可以是任意类型，Object的键名只能是字符串

* 键的顺序

  Map的键是有序的，在迭代时根据插入顺序返回键，Object的键是无序的

* 键的数量

  Map的键的数量可以根据Size属性得到，Object的键只能手动计算

* 迭代

  Map是可迭代的，但是迭代Object需要先获取他的键名才可以进行迭代

* 性能

  Map对于频繁增删键值对的情况下比Object表现更好



