/**
 *
 Created by zhangzhao on 2017/8/14.
 Email: zhangzhao@gomeplus.com
 */
function Node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function find(item) {
    var currentNode = this.head;
    while (currentNode.element != item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function findPrevious(item) {
    var currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element != item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(item) {
    var preNode = this.findPrevious(item);
    if (preNode.next !== null) {
        preNode.next = preNode.next.next;
    }
}