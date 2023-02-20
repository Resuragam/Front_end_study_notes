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


function Person (age) {
    this.age = age
}

const p = myNew(Person, 36)
console.log(p)