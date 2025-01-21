// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

function task2(symbol) {
    array = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ]

    let check = 0;

    for (i = 0; i < array.length; i++) {
        console.log(array[i])
        if (symbol === array[i]) {
            return 1;
        }
    }
    return 0;
}

console.log(task2("f"));

