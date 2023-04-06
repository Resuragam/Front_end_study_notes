/**
 * @Description:
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 * */

function convertToBinary(num) {
    let bitArr = []
    while(num !== 0) {
        let temp = num % 2
        bitArr.unshift(temp)
        num = Math.floor(num / 2)
    }
    while (bitArr.length < 8) {
        bitArr.unshift(0)
    }
    return bitArr.join('')
}

console.log(convertToBinary(128))