/**
 *
 * @param str1
 * @param str2
 * @returns {boolean}
 *
 * if objects then use sort fn with callback.
 *
 * Determine if one string is a permutation of other
 * I: AABB BBAA
 *O : true
 * C:
 * E: length of string
 */

var checkPermute = function (str1, str2) {

    if(str1.length !== str2.length){
        return false;
    }
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 === str2 ? true: false
}

console.log(checkPermute("aba", "baa"));