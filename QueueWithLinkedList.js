
class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if(this.length > 0) {
            return this.first.value;
        } else {
            console.error("Queue is empty");
        }
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if(this.length === 0) {
            console.error("Queue is empty");
            return;
        } else if(this.length === 1) {
            this.last = null;
        }
        const first = this.first.value;
        this.first = this.first.next;
        this.length--;
        return first;
    }

}

const queue = new Queue();

console.log(queue);
console.log(queue.peek());

queue.enqueue("first")

console.log(queue);
console.log(queue.peek());

queue.enqueue("Second")

console.log(queue);
console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());

// console.log(queue.peek());

console.log(queue);
