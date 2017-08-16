/**
 *
 Created by zhangzhao on 2017/8/16.
 Email: zhangzhao@gomeplus.com
 */
//动态规划算法
//数组中去除重复的算法
Array.prototype.unique = function(){
    this.sort();
    var re=[this[0]];
    for(var i = 1; i < this.length; i++)
    {
        if( this[i] !== re[re.length-1])
        {
            re.push(this[i]);
        }
    }
    return re;
}
function max(a,b){
    return (a > b) ? a: b;
}
function dynamicPack(capacity, size, value){
    var arr=new Array();
    var n=size.length;//item 的数量
    var k = new Array();
    //手动构建二维array
    for(var i=0;i<= capacity+1;i++){
        k[i]=[];
    }
    for(var i=0;i<=n;i++){
        for(var w=0;w <= capacity;w++){
            if(i==0 || w==0){
                k[i][w]=0;//表示当物体为前面i个,背包容量为w的最大价值
            }
            else if(size[i-1] <= w){//大小为size[i-1]的物品可以放入背包时
                k[i][w]=max(value[i-1] +k[i-1][w-size[i-1]] , k[i-1][w]);
                if(k[i][w] !=k[i-1][w])
                    arr.push(value[i-1]);
            }
            else{//大小为size[i-1]的物品不能放入背包时
                k[i][w]=k[i-1][w];
            }
            console.log(k[i][w]);
            console.log("...");
        }
    }
    var unarr=arr.unique();
    //console.log(unarr);
    var tem=0;
    var re=[];
    //k[n][capacity]是总价
    for(var i in unarr){
        if(tem <= k[n][capacity]){
            re.push(unarr[i]);
            tem+= parseInt(unarr[i]);
        }
    }
    //return re;//选取的商品价值
    return k[n][capacity];//最大价值
}
var value = [6,5,10,11,13];//价值
var size = [3,4,7,8,9];//尺寸
var capacity = 16;//背包容量
var result=dynamicPack(capacity,size,value);
console.log(result);
