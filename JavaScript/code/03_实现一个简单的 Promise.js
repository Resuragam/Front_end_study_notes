class MyPromise {
    // 定义 Promise 的三种状态
    static Pending = 'pending'
    static Fulfilled = 'fulfilled'
    static Rejected = 'rejected'

    constructor(executor) {
        this.status = MyPromise.Pending
        this.value = undefined
        this.reason = undefined

        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        try{
            executor(this.resolve.bind(this), this.reject.bind(this))
        }catch(e){
            this.reject(e)
        }
    }

    resolve = value => {
        setTimeout(() => {
            if(this.status === MyPromise.Pending) {
                this.status = MyPromise.Fulfilled
                this.value = value
                this.onResolvedCallbacks.forEach(callback => callback(value))
            }
        },0)
    }

    reject = reason => {
        setTimeout(() => {
            if(this.status === MyPromise.Pending) {
                this.status = MyPromise.Rejected
                this.reason = reason
                this.onRejectedCallbacks.forEach(callback => callback(reason))
            }
        },0)
    }

    then = (onFulfilled, onRejected) =>{
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        if(this.status === MyPromise.Pending){
            this.onResolvedCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }

        if(this.status === MyPromise.Fulfilled){
            setTimeout(() => {
                onFulfilled(this.value)
            })
        }

        if(this.status === MyPromise.Rejected){
            setTimeout(() => {
                onRejected(this.reason)
            })
        }
    }
}
