/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */
Function.bind.prototype = function () {
    var fn = this, args = [].slice.call(arguments), object = args.shift();
    return function () {
        var arg = [].slice.call(arguments);
        return fn.apply(object, arg.concat(args));
    }
}

global.x = 9;    // this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: function(a) {
        return this.x + a;
    }
};

console.log(module.getX(1)); // 81

var retrieveX = module.getX;
console.log(retrieveX(1));
var boundGetX = retrieveX.bind(module, 2);
console.log(boundGetX()); // 81