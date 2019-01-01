/*

Determine if string has unique characters no extra space

*  // O(n^2) approach, no additional data structures used
 // for each character, check remaining characters for duplicates
* */

var isUniqueChars = function (str) {

    var len = str.length;
    for (let i=0; i< len;i++) {
        for(let j=i+1; j < len; j++){
            if(str[i] === str[j]) {
                return true;
            }
        }
    }
    return false;

}

console.log(isUniqueChars("helow"));