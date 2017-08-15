/**
 *
 Created by zhangzhao on 2017/7/5.
 Email: zhangzhao@gomeplus.com
 */
function SingleNumber(nums) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }
    Object.keys(map).forEach(current=>{
       if (map[current] === 1) {
           console.log(current);
       }
    });
}
var nums = [1,1,5,5,4,3,3,8,6,8,6];
SingleNumber(nums);