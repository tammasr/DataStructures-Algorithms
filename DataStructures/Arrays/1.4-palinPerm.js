/**
 * Even odd characters , hashtable
 * check if string is a permutation of a palindrome
 *
 * I: BBBAA
 * O: Permutations are ABBBA
 * C:
 * E: empty string
 */
let palinPerm = function (s1) {

    let len = s1.length;
    if (len === 0){ return false; }
    let hash = {};

    for (let i=0; i< len;i++){
        if (hash[s1[i]]) {
            delete hash[s1[i]];
        } else {
            hash[s1[i]] = true;
        }
    }
    console.log(Object.keys(hash));
    if(Object.keys(hash).length === 1 || Object.keys(hash).length === 0) {
        return true;
    }
    return false;

};

// console.log(palinPerm("BBBAA"));

console.log(palinPerm("BBBBAAAADDCCCCC"));

