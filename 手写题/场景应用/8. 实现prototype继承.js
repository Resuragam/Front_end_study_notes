function SupperFunction(flag1) {
    this.flag1 = flag1
}

function SubFunction(flag2) {
    this.flag2 = flag2
}

let superInstance = new SupperFunction(true)

SubFunction.prototype = superInstance

let subInstance = new SubFunction(false)

//子调用自己和父的属性
console.log(subInstance.flag1)   // true
console.log(subInstance.flag2)   // false