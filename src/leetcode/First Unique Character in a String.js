/**
 *
 Created by zhangzhao on 2017/7/11.
 Email: zhangzhao@gomeplus.com
 */
var firstUniqChar = function(s) {
    var arr = s.split("");
    var obj = {};
    for (var i = 0, len = arr.length; i < len;i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = {
                num : obj[arr[i]].num + 1,
                inx: i
            };
        } else {
            obj[arr[i]] = {
                num : 1,
                inx: i
            }
        }
    }

    var f = -1;
    var keys = Object.keys(obj);
    for (i =0,len =keys.length; i<len;i++) {
        if (obj[keys[i]].num == 1) {
            f = obj[keys[i]].inx;
            break;
        }
    }
    return f;
};


console.log(firstUniqChar('llee'));

var firstUniqChar1 = function(s) {
    for(i=0;i<s.length;i++){
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar1('lleea'));