// Дана некоторая строка. Найдите позицию третьего нуля в строке.

function task2(string) {
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        console.log(string[i]);
        if (string[i] === "0") {
            counter++;
        }
        if (counter === 3) {
            console.log(i);
            break;
        }
    }
}

task2("1010101");