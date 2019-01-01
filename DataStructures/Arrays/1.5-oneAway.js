/**
 * insert
 * delete
 * replace
 *
 * I:
 * O:
 * C:
 * E: empty strings, diff is >1 return false
 *
 * s1.len - s2.len => edit
 * left one ele in hash table
 *
 * s1.len - s2.len === 1 add/delete
 * {a: }
 *
 * Time: O(m) + O(n)
 * Space: O(x)
 */


let oneAway  = function (s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;

    if(s1Len === 0 && s2Len === 0){
        return false;
    }
    if (s1Len > s2Len && s1Len - s2Len > 1) {
        return false;
    } else if (s2Len - s2Len > 1) {
        return false;
    }

    let hash = {};
    if (s1Len === s2Len) {
        // edit
        return buildHash(s1Len, s2Len, s1, s2, hash);

    } else {
        return buildHash(s1Len, s2Len, s1, s2, hash);
        // if(Object.keys(hash).length === 1) { return true};
    }

    return false;
};

let buildHash = function (s1Len, s2Len, s1, s2, hash) {
    for (let i =0; i< s1Len; i++){
        hash[s1[i]] ? hash[s1[i]]++: 1;
    }
    for (let i =0; i< s2Len; i++){
        if (hash[s2[i]]){
            hash[s12[i]] === 0? delete hash[s2[i]] : hash[s2[i]]--;
        }
    };
    if(Object.keys(hash).length === 1 || Object.keys(hash).length === 0) { return true};
    return false;
}