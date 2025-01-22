// ны два массива:
//
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
//
// [1, 2, 'a', 'b', 'c', 3]

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let mergedArray = [];
let maxLength = Math.max(arr1.length, arr2.length);

for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
        mergedArray.push(arr1[i]);
    }
    if (i < arr2.length) {
        mergedArray.push(arr2[i]);
    }
}

console.log(mergedArray);
