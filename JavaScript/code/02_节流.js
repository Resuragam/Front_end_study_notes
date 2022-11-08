function color() {
    console.log('改变颜色')
    let r = Math.floor( Math.random() * 255 )
    let g = Math.floor( Math.random() * 255 )
    let b = Math.floor( Math.random() * 255 )
    document.body.style.background = `rgb(${r},${g},${b})`
}

// 方式一： 使用时间戳
function throttle1(fn, wait){
    let time = 0
    return function () {
        let _this = this
        let args = arguments
        let now = Date.now()
        if(now - time > wait){
            fn.apply(_this, args)
            time = now
        }
    }
}

// 方式2: 使用定时器
function thorttle2(fn, wait) {
    let timer;
    return function () {
        let _this = this;
        let args = arguments;
        if (timer) return
        timer = setTimeout(function () {
            timer = null;
            fn.apply(_this, args)
        }, wait)
    }
}

window.addEventListener('resize', thorttle2(color, 2000))
