// Дано слово. Получите его последнюю букву.
// Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

function task6(word) {
    len = word.length;
    simvol = word[len - 1];
    if (simvol !== "ь") {
        console.log(simvol)
    } else {
        console.log(word[len - 2])
    }
}

task6("амфетамин");
