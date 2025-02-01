// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац

function sum() {
    let num = 0;
    let sum = 0;
    while (num !== 100) {
        sum += num;
        num++;
    }
    document.getElementById('result').innerHTML = sum;
}
