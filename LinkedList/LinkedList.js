class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        if (index >= this.length) {
            this.append(value);
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const newNode = new Node(value);
        const nodeByIndex = this.getNodeByIndex(index - 1);
        newNode.next = nodeByIndex.next;
        nodeByIndex.next = newNode;
        this.length++;
    }

    remove(index) {
        const prevNodeByIndex = this.getNodeByIndex(index - 1);
        const deleteNode = prevNodeByIndex.next;
        prevNodeByIndex.next = deleteNode.next;
        this.length--;
    }

    getNodeByIndex(index) {
        if (index >= this.length) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const items = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            items.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(items);
    }

    reverse() {
        if (this.length < 2) {
            return;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(2);
myLinkedList.prepend(77);
myLinkedList.insert(1, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
console.log('myLinkedList: ', myLinkedList);
myLinkedList.printList();
