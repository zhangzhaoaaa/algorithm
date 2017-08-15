/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */
function BubbleSort(array) {
    for (var i = 0, len = array.length; i < len; i++) {
        for (var j = i; j < len; j++) {
            if (array[i] < array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(BubbleSort([1,5,6,3,2,8]))