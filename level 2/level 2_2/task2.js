// Дан массив с числами. Оставьте в нем только положительные числа.

function task2(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array.splice(i, 1);
        }
    }
    console.log(array);
}

task2([1, 2, 3, -1488, 4, 5, -10]);
