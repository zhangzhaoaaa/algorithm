/**
 *
 Created by zhangzhao on 2017/7/6.
 Email: zhangzhao@gomeplus.com
 */
function moveZeros(nums) {
    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
        }
    }
}
var nums = [0,1,0,3,12];
moveZeros(nums);
console.log(nums);