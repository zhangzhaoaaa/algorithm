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

function BFS(array) {
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
            for (var j = 0,jLen = item.children.length;j < jLen; j++) {
                stack.push(item.children[j]);
            }
        }
    }
}