// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

function task3(array) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i].sort((a, b) => a - b);
    }
    console.log(array);
}

task3([
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
    ]);
