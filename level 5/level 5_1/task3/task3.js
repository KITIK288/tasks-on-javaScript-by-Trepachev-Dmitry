// Дан абзацы с числами, абзац и кнопка.
//
// По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

function sum() {
    let num1 = document.getElementById('num1').innerText
    let num2 = document.getElementById('num2').innerText;
    num1 = Number(num1);
    num2 = Number(num2);
    document.getElementById('result').innerText = num1 + num2;
}
