class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value, null, this.tail);
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
        const prevNode = this.getNodeByIndex(index - 1);
        const nextNode = prevNode.next;
        const newNode = new Node(value, nextNode, prevNode);
        prevNode.next = newNode;
        nextNode.prev = newNode;
        this.length++;
    }

    remove(index) {
        const deleteNode = this.getNodeByIndex(index);
        const prevNode = deleteNode.prev;
        const nextNode = deleteNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(2);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.printList();
 