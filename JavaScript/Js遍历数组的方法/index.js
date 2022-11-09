const arr = [1,2,3,4,5]

arr.forEach((item, index,array) => {
    console.log(item,index)
})

for(let key in arr) {
    console.log(arr[key])
}

for(let item of arr) {
    console.log(item)
}