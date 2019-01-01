function replaceAt (character, write,str) {
console.log('character adding ', character);
console.log('first half ', str.substring(0, write));
console.log('last hald ', str.substring(write+character.length));
console.log('**********************');
return str.substring(0, write) + character + str.substring(write+character.length);
}
function remove_duplicates(str) {
var read = 0;
var write = 0;
var hashSet = new Set([]);
while (read < str.length) {
if (hashSet.has(str[read])) {
read ++;
} else {
// add to hash map
hashSet.add(str[read]);
// console.log('adding', str[read]);
str = replaceAt(str[read], write, str);
// console.log(str);
write++;
read++;
}
}
return str.substring(0, write);
}

console.log(remove_duplicates('HelloWorld'));