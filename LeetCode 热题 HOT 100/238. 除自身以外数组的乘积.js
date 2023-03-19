/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const front = new Map()
    const end = new Map()
    const ans = []

    let sum = 1
    for (let i = 0; i < nums.length; i++) {
        sum = sum * nums[i]
        front.set(i, sum)
    }
    sum = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        sum = sum * nums[i]
        end.set(i, sum)
    }
    console.log(front)
    console.log(end)
    for (let i = 0; i < nums.length; i++) {
        let f = (i === 0 ?  1 : front.get(i - 1))
        console.log('f', f)
        let e = (i === nums.length - 1  ? 1 : end.get(i + 1))
        console.log('e', e)
        ans[i] = f * e
    }

    return ans
};

const nums = [1,2,3,4]
console.log(productExceptSelf(nums))