
class Stack {

    constructor() {
        this.value = [];
    }

    peek() {
        return this.value[this.value.length - 1];
    }

    push(value) {
        this.value.push(value);
        return this;
    }

    pop() {
        return this.value.pop();
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
