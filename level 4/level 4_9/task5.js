// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел
//
// и возвращать массив максимальных чисел в каждом подмассиве.

function task5(array) {
    let newArray = [];
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array[i].length; x++) {
            if (array[i][x] > max) {
                max = array[i][x];
            }
        }
        newArray.push(max);
    }
    return newArray;
}

console.log(task5([
    [1, 2, 3],
    [4, 5, 6],
]));
