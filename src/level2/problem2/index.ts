export type DowntimeLogs = [Date, Date][];

export function merge(...args: DowntimeLogs[]): DowntimeLogs {
  /**
   * insert your code here
   */
  return [];
}

// My old codes relating for this problem

// function selectionSort(array){
// 	let sortedarray = [];
// 	let length = array.length;
// 	for (let i = 0; i < length;i++) {
// 		let min = Math.min(...array);
// 		sortedarray.push(min);
// 		array.splice(array.indexOf(min),1);
// 	}
// 	return sortedarray;
// }

//Note to self: mergeSort doesn't use other sort
// function merge(lArray,rArray) {
// 	let sortedArray = [];
// 	let i =0,j = 0,k = 0;
// 	while (i < lArray.length && j < rArray.length) {
// 		if (lArray[i] < rArray[j]) {
// 			sortedArray.push(lArray[i++]);
// 		}
// 		else {
// 			sortedArray.push(rArray[j++]);
// 		}
// 	}
// 	while (i < lArray.length) {
// 		sortedArray.push(lArray[i++]);
// 	}
// 	while (j < rArray.length) {
// 		sortedArray.push(rArray[j++]);
// 	}
// 	return sortedArray;
// }
// function mergeSort(array) {
// 	if (array.length == 1) {
// 		return array;
// 	} else {
// 		let divider = array.length / 2;
// 		const leftarray = mergeSort(array.slice(0,divider));
// 		const rightarray = mergeSort(array.slice(divider,array.length));
// 		return merge(leftarray,rightarray);
// 	}
// }
// let array = [5,1,3,4,5,6,8];
// console.log(mergeSort(array));
// // console.log("start array:",array,"result",mergeSort(array));
