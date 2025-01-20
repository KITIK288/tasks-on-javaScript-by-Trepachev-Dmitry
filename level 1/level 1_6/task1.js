// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

function task1(array) {
    sum = 0
    for (i = 0; i < array.length; i++) {
        a = array[i] ** 2;
        sum += a;
    }
    console.log(sum);
}

task1([1, 2, 3, 4, 5]);
