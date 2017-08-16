/**
 *
 Created by zhangzhao on 2017/8/16.
 Email: zhangzhao@gomeplus.com
 */
/*
 a:{
 weight : weight, //当前物品重量
 value : value //当前物品价值
 }
 */
function knapsack(a, limitW) {

    var totV = 0,
        maxV = 0;
    var option = [],
        cop = [];
    var N=a.length;
    for (var i = 0;
         i < a.length;
         i++) {
        totV += a[i].value
    }



    function find(i, tw, tv) {
        var k;
        if (tw + a[i].weight <= limitW) //考虑物品i放入背包的情况
        {
            cop[i] = a[i].index;
            if (i < N - 1) {
                find(i + 1, tw + a[i].weight, tv);
            }
            else {
                //最佳结果形成
                for (k = 0; k < N; k++) {
                    option[k] = cop[k];
                }
                maxV = tv;
            }
        }
        if (tv - a[i].value > maxV) //考虑物品i不放入背包的情况，此状态可以剪掉部分节点
        {
            cop[i] = 0;
            if (i < N - 1) {
                find(i + 1, tw, tv - a[i].value);
            }
            else {
                //最佳结果形成
                for (k = 0; k < N; k++) {
                    option[k] = cop[k];
                }
                maxV = tv - a[i].value;
            }
        }
    }

    find(0, 0, totV);

    return {
        maxValue: maxV,
        option: option
    };

}