// Даны два числа. Получите массив общих делителей этих чисел.

function task3(num1, num2) {
    let array = [];
    let array2 = [];
    let checker = 0;
    let div = 0;
    while (checker !== num1) {
        if (num1 % div === 0) {
            array.push(div);
        }
        div++;
        checker++;
    }
    div = 0;
    checker = 0;
    while (checker !== num2) {
        if (num2 % div === 0) {
            array2.push(div);
        }
        div++;
        checker++;
    }
    const result = array.filter(value => array2.includes(value));
    console.log(result);

}

task3(12, 6);
