// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    var n = parseInt(await readline());
    var nums = (await readline()).split(" ");
    var color = (await readline()).split("");
    var blue = 0, red = 0;
    var a = 1000000000 + 7
    for (var i = 0; i < n; i++) {
        if(color[i] == 'R') {
            red = red + (Number(nums[i]) % a)
            red = red % a;
        }else {
            blue = blue + (Number(nums[i]) % a)
            blue = blue % a
        }
    }
    console.log((blue * red) % a);
}()