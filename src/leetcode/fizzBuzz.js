/**
 *
 Created by zhangzhao on 2017/7/5.
 Email: zhangzhao@gomeplus.com
 */
function div(num, key) {
    return num % key === 0;
}
function fizzBuzz(n) {
    var array = [];
    for (var i = 1; i< 16; i++) {
        if (div(i ,3) && div(i ,5)) {
            array.push("FizzBuzz");
        } else if (div(i ,3)) {
            array.push("Fizz");
        } else if (div(i ,5)) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}
console.log(fizzBuzz(15));