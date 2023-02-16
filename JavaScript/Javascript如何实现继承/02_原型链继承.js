function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
function Child() {
    this.type = 'child2';
}
Child.prototype = new Parent();
console.log(new Child())

var s1 = new Child()
var s2 = new Child()
s2.play.push(4)
console.log(s1.play)