// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

function sqRoot() {
    let num = document.getElementById('num').value;
    console.log(num);
    num = Number(num) ** Number(num);
    document.getElementById('num').value = num;
}
