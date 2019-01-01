var mySet = function () {

    this.collection = [];

    this.has = function (item) {
        if (this.collection.indexOf(item) === -1) {
            return false;
        } else {
            return true;
        }
    };

    this.values = function () {
        return this.collection;
    }

    this.add = function (item) {
        if (!(this.has(item))) {
            this.collection.push(item);
        }
        return this.collection;
    };

    this.remove = function (item) {
        if (this.has(item)) {
            var index = this.collection.indexOf(item);
            var removed = this.collection.splice(index, 1);
        }
        return removed;
    };

    this.union = function () {

    };

    this.intersection = function () {

    };

    this.subset = function () {

    };

    this.difference = function () {

    };
};

var set = new mySet();

set.add("A");
set.add("B");
set.add("A");
console.log(set.collection);
set.remove("A");
console.log(set.collection);
