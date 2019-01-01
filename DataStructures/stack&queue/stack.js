var myStack = function () {

    this.storage = {};
    this.count = 0;

    this.push = function (item) {
        this.storage[this.count] = item;
        this.count++;
    };

    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        // item is boolean
        var item = delete this.storage[this.count];
        return item;
    };

    this.peek = function () {
        return this.storage[this.count -1];
    };

    this.len = function () {
        return this.count;
    };
};

var stack = new myStack();
console.log('stack is ', stack);
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
