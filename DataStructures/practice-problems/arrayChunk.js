
// function chunk(arr, size) {
// 	let index = 1;
// 	let result = [];
// 	let subArr = [];
// 	arr.forEach((item) => {
// 		if (index > size) {
// 			result.push(subArr);
// 			subArr = [item];
// 			index = 1;
// 			// continue;
// 		} else {
// 			subArr.push(item);
// 		}
// 		index ++;
// 	})
//     result.push(subArr);
// 	console.log(result);
// }


function chunk (arr, size) {
    let index = 0;
    let result = [];
    while (index < arr.length) {
        let sliced = [];
        sliced = arr.slice(index, index+size);
        result.push(sliced);
        index = index + size;
    }
console.log(result);
}

chunk([1,2,3,4,5,6,7,8], 3);

module.exports = chunk;

