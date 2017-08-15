/**
 *
 Created by zhangzhao on 2017/7/9.
 Email: zhangzhao@gomeplus.com
 */
function top(nums, k) {
    var arr = [],
        map = {};
    for (var i = 0, len = nums.length; i < len;i++) {
        if (map[nums[i]]) {
            map[nums[i]] = map[nums[i]] + 1;
        } else {
            map[nums[i]] = 1;
        }
    }
    Object.keys(map).forEach(key=>{
        var obj = {};
        obj = {
            key: key,
            value: map[key]
        };
        arr.push(obj);
    });

    arr = arr.sort(function (a, b) {
        return a.value === b.value ? 0 : (a.value > b.value ? -1: 1);
    }).reverse();

    arr = arr.slice(arr.length - k);
    var retArr = [];
    arr.forEach(current=>{
        retArr.push(current.key);
    });
    return retArr;
}

var nums = [2,2,1,1,1,5,3,4,6,4];

console.log(top(nums, 3));
