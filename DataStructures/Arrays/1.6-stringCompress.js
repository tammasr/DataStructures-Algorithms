/**
 * I: aaabbccccc
 * O: a3b2c4
 * C: uppercase/lowercase
 * E: empty string
 *
 * take currentChar, currCount   loop until you find diff char
 * then store current var+count in result and move forward
 *
 * Time: O(n)
 * Space: O(n)
 *
 */


let stringCompress = function (s) {
    let res = '';

    if(s.length ===0){
        return s;
    }

    let curr;
    let count = 0;
    curr = s[0];
    for (let i=0; i <= s.length;i++){
        if (s[i] === curr) {
            count++;
        } else {
            res += curr + count;
            curr = s[i];
            count = 1;
        }
    }
    return res;


};

console.log(stringCompress("aaabbcccccd"));