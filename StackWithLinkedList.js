
class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if(this.length > 0) {
            return this.top.value;
        } else {
            console.error("Stack is empty");
        }
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const oldTop = this.top;
            this.top = newNode;
            this.top.next = oldTop;
        }
        this.length++;
    }

    pop() {
        if(this.length === 0) {
            console.error("Stack is empty");
            return;
        } else if(this.length === 1) {
            this.bottom = null;
        }
        const top = this.top.value;
        this.top = this.top.next;
        this.length--;
        return top;
    }

}

const stack = new Stack();

console.log(stack.peek());

stack.push("first")

console.log(stack.peek());

stack.push("Second")

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());

// console.log(stack.peek());

console.log(stack);