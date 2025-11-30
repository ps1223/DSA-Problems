
class DoublyLinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1; //Trying to include length in the DS
    }

    append(value) {
        const oldTail = this.tail;
        const newNode = new Node(value, oldTail);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    preappend(value) {
        const oldHead = this.head;
        const newNode = new Node(value, null, oldHead);
        oldHead.prev = newNode;
        this.head = newNode;
        this.length++;

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
        } else if(index > this.length) {
            this.append(value);
        } else {
            const prevNode = this.findNodeByIndex(index - 1);
            const nextNode = prevNode.next;
            const newNode = new Node(value, prevNode, nextNode);
            prevNode.next = newNode;
            nextNode.prev = newNode;
        }
    }

    delete(index) {
        if(index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            const prevNode = this.findNodeByIndex(index - 1);
            const deletionNode = prevNode.next;
            const nextNode = deletionNode.next;
            prevNode.next = nextNode;
            if(nextNode) {
                nextNode.prev = prevNode;
            } else {
                this.tail = prevNode;
            }
        }
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

    printListReverse() {
        let list = [this.tail.value];
        let node = this.tail;
        while(node.prev) {
            node = node.prev;
            list.push(node.value);
        }
        console.log("List --> ", list.join(" ---> "), `    | Head : ${this.head.value}    | tail : ${this.tail.value}`);
    }

    print() {
        this.printList();
        this.printListReverse();
    }

}

class Node {

    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

}

const doublyLinkedList = new DoublyLinkedList(5);

doublyLinkedList.print();

doublyLinkedList.append(10);

doublyLinkedList.print();

doublyLinkedList.preappend(0);

doublyLinkedList.print();

doublyLinkedList.insert(2, 8);

doublyLinkedList.print();

doublyLinkedList.delete(2);

doublyLinkedList.print();

doublyLinkedList.delete(2);

doublyLinkedList.print();

doublyLinkedList.delete(1);

doublyLinkedList.print();
