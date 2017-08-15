/**
 *
 Created by zhangzhao on 2017/7/9.
 Email: zhangzhao@gomeplus.com
 */
function columnNumber(name) {
    var target = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22,
        'W': 23,
        'X': 24,
        'Y': 25,
        'Z': 26
    }
    var name = name.toUpperCase();
    if (name.length === 1) {
        return target[name];
    } else if (name.length === 2){
        if (target[name[0]] && target[name[1]]) {
            return 26 * target[name[0]] + target[name[1]];
        } else {
            return "please input correctly"
        }

    } else {
        return "Sorry, I can't handle it";
    }
}
console.log(columnNumber('55'));

function titleToNumber(s) {
    var result = 0,
        len  = s.length,
        A = 'A'.charCodeAt(0);
    for (var i = 0; i < len; i++) {
        result = result * 26 + (s.charCodeAt(i) - A + 1);
    }
    return result;
}

console.log(titleToNumber('F'));