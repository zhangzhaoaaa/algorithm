/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */
function quickSort(arry) {
    if (arry.length <= 1) {
        return arry;
    }
    var len = arry.length,
        baseDataIndex = Math.floor(len/2),
        left = [],
        right = [];
    var baseData = arry.splice(baseDataIndex, 1)[0];
    for (var i = 0; i < len; i++) {
        if (arry[i] < baseData) {
            left.push(arry[i]);
        } else if (arry[i] > baseData) {
            right.push(arry[i]);
        }
    }
    return quickSort(left).concat([baseData]).concat(right);
}

console.log(quickSort([1,4,7,2,5]))