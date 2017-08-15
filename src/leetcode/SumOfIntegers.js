/**
 *
 Created by zhangzhao on 2017/7/5.
 Email: zhangzhao@gomeplus.com
 */
function getSum(a, b) {
    if(b == 0){//没有进为的时候完成运算
        return a;
    }
    var sum, carry;
    sum = a^b; //完成第一步加发的运算
    carry = ( a & b ) << 1; //完成第二步进位并且左移运算
    return getSum(sum,carry);
}

console.log(getSum(8, 8));