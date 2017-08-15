/**
 *
 Created by zhangzhao on 2017/7/10.
 Email: zhangzhao@gomeplus.com
 */
var convertToTitle = function(n) {
    var result = [];
    while(n > 0) {
        n--;
        result.push(String.fromCharCode(65 + n % 26));
        n = Math.floor(n / 26);
    }
    return result.reverse().join("")
};

console.log(convertToTitle(43));