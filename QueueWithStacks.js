
var Queue = function() {
    this.first = [];
    this.last = [];
};

Queue.prototype.enqueue = function(x) {
    this.first.push(x);
    console.log(this);
};

Queue.prototype.dequeue = function() {
    console.log(this);
    if(this.last.length > 0) {
        return this.last.pop();
    }
    if(this.first.length > 0) {
        while(this.first.length > 0) {
            this.last.push(this.first.pop());
        }
        return this.last.pop();
    }
};

Queue.prototype.peek = function() {
    console.log(this);
    if(this.last.length > 0) {
        return this.last[this.last.length - 1];
    }
    if(this.first.length > 0) {
        while(this.first.length > 0) {
            this.last.push(this.first.pop());
        }
        return this.last[this.last.length - 1];
    }
};

Queue.prototype.isempty = function() {
    return this.first.length === 0 && this.last.length === 0;
};

const queue = new Queue();

console.log(queue);
console.log(queue.peek());

queue.enqueue("first")

console.log(queue);
console.log(queue.peek());

queue.enqueue("Second")

console.log(queue);
console.log(queue.peek());

console.log(queue.isempty());

console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());

console.log(queue.isempty());

// console.log(queue.peek());

console.log(queue);
