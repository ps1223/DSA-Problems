
class LinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    preappend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    findNodeByIndex(index) {
        let node = this.head;
        let i = 0;
        while(node.next) {
            if(i === index) {
                break;
            }
            node = node.next;
            i++;
        }
        if(i < index) {
            console.log("Index is larger than the size of linked list");
            return null;
        }
        return node;
    }

    insert(index, value) {
        if(index === 0) {
            this.preappend(value);
            return;
        }
        const prevNode = this.findNodeByIndex(index - 1);
        if(prevNode) {
            const nextNode = prevNode.next;
            const newNode = new Node(value);
            prevNode.next = newNode;
            newNode.next = nextNode;
        }
    }

    delete(index) {
        if(index === 0) {
            this.head = this.head.next;
        }
        const prevNode = this.findNodeByIndex(index - 1);
        const deletionNode = prevNode.next;
        if(deletionNode) {
            if(deletionNode.next) {
                prevNode.next = deletionNode.next;
            } else {
                prevNode.next = null;
                this.tail = prevNode;
            }
        }

    }

    reverse() {
        if(!this.head.next) {
            return;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return;
    }

    printList() {
        let list = [this.head.value];
        let node = this.head;
        while(node.next) {
            node = node.next;
            list.push(node.value);
        }
        console.log("List --> ", list.join(" ---> "), `    | Head : ${this.head.value}    | tail : ${this.tail.value}`);
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const myLinkedList = new LinkedList(5);

myLinkedList.printList();

myLinkedList.append(10);

myLinkedList.printList();

myLinkedList.preappend(0);

myLinkedList.printList();

myLinkedList.insert(2, 8);

myLinkedList.printList();

// myLinkedList.delete(2);

// myLinkedList.printList();

// myLinkedList.delete(2);

// myLinkedList.printList();

// myLinkedList.delete(1);

myLinkedList.reverse();

myLinkedList.printList();
