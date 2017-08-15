/**
 *
 Created by zhangzhao on 2017/7/7.
 Email: zhangzhao@gomeplus.com
 */
var ShiftUnshift = {
    reverse: function (nums) {
        for (var i = 0, len = nums.length; i < len / 2; i++) {
            var t = nums[i];
            nums[i] = nums[len - i - 1];
            nums[len - i - 1]=t;
        }
    },
    shift: function(nums) {
        this.reverse(nums);
        nums.pop();
        this.reverse(nums);
        return nums;
    },
    unshift: function(nums, num) {
        this.reverse(nums);
        nums.push(num);
        this.reverse(nums);
        return nums;
    }
}

//console.log(ShiftUnshift.shift([1,2,3,4,5]));

///console.log(ShiftUnshift.unshift([1,2,3,4,5], 0));

Array.prototype.reverse = function () {
    //console.log("reverse...");
    var nums = this;
    for (var i = 0, len = nums.length; i < len / 2; i++) {
        var t = nums[i];
        nums[i] = nums[len - i - 1];
        nums[len - i - 1]=t;
    }
}

Array.prototype.shift = function () {
    //console.log("shift...");
    var nums = this;
    this.reverse(nums);
    var ele = nums.pop();
    this.reverse(nums);
    return ele;
};

Array.prototype.unshift = function () {
    var nums = this;
    this.reverse(nums);
    for (var i = arguments.length - 1; i >= 0;i--) {
        nums.push(arguments[i]);
    }
    this.reverse(nums);
    return nums.length;
}

var arr = [1,2,3,4];
console.log("shift.return element...", arr.shift());
console.log("after shift...", arr);

arr = [1,2,3,4,5];
console.log("unshift return new array length", arr.unshift(0,1,2));
console.log("after unshift...", arr);