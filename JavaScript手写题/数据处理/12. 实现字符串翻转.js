String.prototype.myServer = function (str) {
    return str.split('').reverse().join('')
}
console.log(new String().myServer('hello'))