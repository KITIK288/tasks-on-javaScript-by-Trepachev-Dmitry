//  Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
//
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов,
// стоящих на нечетных позициях.

function task3(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenSum += array[i];
        } else {
            oddSum += array[i];
        }
    }
    let result = evenSum / oddSum;
    console.log(result);
}

task3([1, 2, 3, 4, 5, 6]);
