/**
 *
 Created by zhangzhao on 2017/8/16.
 Email: zhangzhao@gomeplus.com
 */
var ary = [{
    weight: 35,
    value: 10
},
    {
        weight: 30,
        value: 40
    },
    {
        weight: 6,
        value: 30
    },
    {
        weight: 50,
        value: 50
    },
    {
        weight: 40,
        value: 35
    },
    {
        weight: 10,
        value: 40
    },
    {
        weight: 25,
        value: 30
    }]
var testA = function (M, ary) {
    var result;
    for (var i = 0; i <= M; i++) {
        result = result || [];
        for (var j = 0; j <= ary.length; j++) {
            result[i] = result[i] || [];
            result[i][j] = -1;
        }
    }
    console.log(result)
    var test = function (M, ary) {
        if (result[M][ary.length] == -1) {
            var temp;
            var data;
            if (ary.length > 0) {
                temp = ary.shift();
                if (M >= temp.weight) {
                    data = Math.max(temp.value + test(M - temp.weight, ary), test(M, ary));
                } else {
                    data = Math.max(test(M, ary));
                }
            } else {
                data = 0;
            }
            result[M][ary.length] = data;
            return data;
        } else {
            return result[M][ary.length];
        }
    }
    return test(M, ary);
}
console.log(testA(150, ary))
