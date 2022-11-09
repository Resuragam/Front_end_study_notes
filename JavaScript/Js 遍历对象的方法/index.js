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

// Object.keys()方法遍历对象自身所有可枚举属性
console.log(Object.keys(obj))

// for..in遍历自身以及原型上继承的可枚举属性
for (let key in obj) {
    console.log(key)
}

// Object.getOwnPropertyNames()获取自身所有属性
console.log(Object.getOwnPropertyNames(obj))

// Reflect.ownKeys()获取对象自身的所有属性
console.log(Reflect.ownKeys(obj))