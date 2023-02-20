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







