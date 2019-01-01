function canSegmentString(str, dict) {
    var first, second;
    var solved = new Set([]);
    for (let i = 0; i < str.length; i++) {
        first = str.substring(0, i);
        second = str.substring(i, str.length);
        if (dict.has(first)) {
            solved.add(first);
            if (dict.has(second)) {
                return true;
            } else {
                if (canSegmentString(second, dict)) {
                    return true
                }
                ;
                return false;
            }
        }
    }
    return false;

}


var string = "applepie";
var dict = new Set(["apple", "pear", "pie"]);
console.log(canSegmentString(string, dict));

