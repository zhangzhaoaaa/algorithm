/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function InvertBinaryTree(node) {
    if (node === null) {
        return;
    }
    if (node.left === null || node.right === null) {
        return;
    }
    var tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    InvertBinaryTree(node.left);
    InvertBinaryTree(node.right);
}