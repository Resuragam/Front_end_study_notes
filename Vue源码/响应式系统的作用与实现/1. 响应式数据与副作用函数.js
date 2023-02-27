const obj = {
    text: 'hello vue3'
}
function effect() {
    document.body.innerText = obj.text
}
obj.text = 'hello world'