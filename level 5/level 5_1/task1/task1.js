// Даны два инпута, абзац и кнопка. В инпуты вводятся числа
//
// По нажатию на кнопку выведите в абзац сумму этих чисел.

function plus() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = Number(num1) + Number(num2)   ;
    document.getElementById('result').innerHTML = `${sum}`;
}
