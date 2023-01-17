function fn1(callback) {
    setTimeout(() => {
        callback()
    },1000)
}

function fn2() {
    console.log('回调函数')
}

fn1(fn2)