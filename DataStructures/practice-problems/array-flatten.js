var inp = [1,2,[3,4,[5,6], 8], 9, 10]

function flat(inp){
var stack = [...inp];
var result =[];
while(stack.length) {
var ele = stack.pop();
if (Array.isArray(ele)){
stack.push(...ele);
} else {
result.push(ele);
}
}
console.log(result);