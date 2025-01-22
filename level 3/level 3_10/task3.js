// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

function task2(num1, num2) {
    let stringNum1 = String(num1);
    let stringNum2 = String(num2);
    let array1 = stringNum1.split("");
    let array2 = stringNum2.split("");
    const commonElements = array1.filter(element => array2.includes(element));
    return commonElements;
}

console.log(task2(1237345, 1245));
