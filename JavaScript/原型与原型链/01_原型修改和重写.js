function Person(name) {
    this.name = name
}
// 修改原型
Person.prototype.getName = function() {}
var p = new Person('hello')
console.log(p.constructor)
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__ === p.constructor.prototype) // true
// 重写原型
Person.prototype = {
    getName: function() {}
}
var p = new Person('hello')
console.log(p.__proto__)
console.log(Person.prototype)
console.log(p.constructor)
console.log(p.__proto__ === Person.prototype)        // true
console.log(p.constructor.prototype)
console.log(p.__proto__ === p.constructor.prototype) // false