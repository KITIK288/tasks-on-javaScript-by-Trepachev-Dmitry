// Дана кнопка и два инпута. В инпуты вводятся числа.
//
// По нажатию на кнопку найдите сумму введенных чисел.

function sum() {
    let num1 = document.getElementById('inputOne').value;
    let num2 = document.getElementById('inputTwo').value;
    let sum = Number(num1) + Number(num2);
    console.log(num1, num2)
    document.getElementById('result').innerHTML = sum;
}
