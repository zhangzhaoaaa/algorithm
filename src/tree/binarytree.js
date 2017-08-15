/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
    this.insert = insert;
}
function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node.data + " ");
        inOrder(node.right);
    }
}
function insert(data) {
    var newNode = new Node(data, null, null);
    if (this.root === null) {
        this.root = newNode;
    }else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = newNode;
                    break;
                }
            } else  {
                current = current.right;
                if (current === null) {
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}
function remove(data) {
    removeNode(this.root, data);
}
function getSmallest(node) {
    if (node.left === null) {
        return node;
    } else {
        return getSmallest(node.left);
    }
}
function removeNode(node, data) {
    if (node === null) {
        return null;
    }
    if (data == node.data) {
        if (node.left === null && node.right === null) {
            return null;
        }
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
    }
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);

inOrder(nums.root);
