/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const resArr = []
    while(s.length) {
        if(resArr.length === 0)
            s = s.slice(0, s.length - 1)
    }
};