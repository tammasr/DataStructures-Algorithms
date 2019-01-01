var myQueue = function () {

    var collection = [];

    this.enqueue = function (data) {
        collection.push(data);
    };

    this.dequeue = function () {
        return collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.print = function () {
        return collection;
    };

};

var testQueue = new myQueue();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
console.log(testQueue.print());
console.log(testQueue.front());
console.log(testQueue.dequeue());
console.log(testQueue.print());

