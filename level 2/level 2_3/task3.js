//  Даны числа, разделенные запятыми:
    // '12,34,56'
//
// Найдите сумму этих чисел.

function task3(string) {
    let sum = 0;
    const numbers = string.split(',').map(Number);
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

task3('12,34,56');
