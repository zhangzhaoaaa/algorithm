/**
 *
 Created by zhangzhao on 2017/7/6.
 Email: zhangzhao@gomeplus.com
 */

var productExceptSelf = function(nums) {
    var result = new Array(nums.length);

    for (var i = 0, tmp = 1; i < nums.length; i++) {
        result[i] = tmp;
        tmp *= nums[i];
    }

    for (var i = nums.length - 1, tmp = 1; i >= 0; i--) {
        console.log(result[i], tmp);
        result[i] *= tmp;
        tmp *= nums[i];
    }
    return result;
};

var nums = [1,2,3,4];
console.log(productExceptSelf(nums));