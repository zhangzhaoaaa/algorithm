/**
 *
 Created by zhangzhao on 2017/7/2.
 Email: zhangzhao@gomeplus.com
 */
function twoNum(nums, target) {
    var obj = {},
        arr = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var diff = target - nums[i];
        if (obj[diff]) {
            arr = [obj[diff], i];
            break;
        }
        obj[nums[i]] = i;
    };
    return arr;
}

console.log(twoNum([2,3,5,7,8,13], 11));