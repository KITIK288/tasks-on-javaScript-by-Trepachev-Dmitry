// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац
//
// его значение возводилось в квадрат.

function numOneSquare() {
    let num = document.getElementById('num1').innerText;
    num = Number(num) ** 2;
    document.getElementById('num1').innerText = num;
}

function numTwoSquare() {
    let num = document.getElementById('num2').innerText;
    num = Number(num) ** 2;
    document.getElementById('num2').innerText = num;
}

function numThreeSquare() {
    let num = document.getElementById('num3').innerText;
    num = Number(num) ** 2;
    document.getElementById('num3').innerText = num;
}
