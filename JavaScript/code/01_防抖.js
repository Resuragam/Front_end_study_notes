// 防抖
function debounce(fn, waitTime) {
    let timer
    return function () {
        let _this = this
        let args = arguments
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function (){
            fn.apply(_this, args)
        }, waitTime)
    }
}
window.onresize = debounce(function (){
    console.log('onresize')
}, 500)
