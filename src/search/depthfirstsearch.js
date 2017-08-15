/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */
var treeNodes = [{
    "id": 0,
    "name": 0,
    "children": [
        {
            "id": 1,
            "name": "1",
            "children": [
                {
                    "id": 11,
                    "name": "11",
                    "children": [
                        {
                            "id": 111,
                            "name": "111",
                            "children": [
                                {
                                    "id": 1111,
                                    "name": "1111"
                                }
                            ]
                        },
                        {
                            "id": 112,
                            "name": "112"
                        }
                    ]
                },
                {
                    "id": 12,
                    "name": "12",
                    "children": []
                }
            ],
            "users": []
        },
        {
            "id": 2,
            "name": "2",
            "children": [
                {
                    "id": 22,
                    "name": "22",
                    "children": []
                }
            ]
        }
    ]
}];

function DFS(array) {
    if (!array || !array.length) {
        return;
    }
    var stack = [];
    for (var i = 0, len = array.length; i < len; i++) {
        stack.push(array[i]);
    }
    var item;
    while (stack.length) {
        var item = stack.shift();
        if (item.children && item.children.length) {
            len = item.children.length;
            for (;len;len--) {
                stack.unshift(item.children[len - 1]);
            }
        }
    }
}