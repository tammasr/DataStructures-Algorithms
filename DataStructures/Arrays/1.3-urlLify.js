/**
 * Time: O(n)
 * @param str
 * @returns {string}
 */

var urLify = function (str) {

    //reverse the string - to ignore first set of spaces and start from characters
    var res = '';
    str = str.split('').reverse().join('');
    var start = false;
    for(let i =0; i < str.length; i++) {
        if (str[i] !== ' '){
            start = true;
        }
        if(start === true && str[i] === ' '){
            res += '02%';
        } else if (start === true && str[i] !==' '){
            res += str[i];
        }
    }
    return res;

}

// We cannot use this replaceAt because it replaces the original string and it makes toucgher to iterate & keep track of
// function replaceAt(index, char, str) {
 index
//   var first = str.slice(0, index);
//   var second = str.substr(index+char.length, str.length);

//   return first + char + second;
// }

// console.log(replaceAt(2, '0%2', "hello world"));

console.log(urLify("hello wor ld  "));