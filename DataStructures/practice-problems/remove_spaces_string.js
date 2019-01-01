function replaceAt (write,str, character) {
return str.substring(0,write) + character + str.substring(write+character.length);
}
function remove_spaces(str) {
var read_ind = 0;
var write_ind = 0;
while(read_ind < str.length) {
if (str[read_ind] === ' ') {
} else {
str = replaceAt(write_ind, str, str[read_ind]);
write_ind++;
}
read_ind++;
}
return str.substring(0, write_ind);
}

console.log(remove_spaces(' Hello Wo  rl     d'));