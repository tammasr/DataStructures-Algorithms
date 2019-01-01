
var x = [1, 2, 5, 1, 7, 2, 4, 2];
var result = [];
var hashMap = {};

for (let i=0; i< x.length;i++) {
    if(hashMap[x[i]]) {

    } else {
        result.push(x[i]);
        hashMap[x[i]] = 1;
    }
}
console.log(result);

//Variant: replace duplicates with zeros: inside if do a push for adding zero into result array