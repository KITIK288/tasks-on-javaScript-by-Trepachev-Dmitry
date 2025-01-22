// Дан некоторый массив, например, вот такой:
//
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
//
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

function task3() {
    const arr = [123, 456, 789];
    const result = arr.flatMap(num => String(num).split('').map(Number));
    console.log(result);
}

task3();
