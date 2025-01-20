// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

function task5(word1, word2) {
    for (i = 0; i < word1.length; i++) {
        a = word1[i];
        break;
    }
    for (i = 0; i < word2.length; i++) {
        b = word2[i];
        break
    }
    if (a === b) {
        console.log("Первые буквы слов равны")
    } else {
        console.log("Первые буквы двух слов не равны")
    }
}

task5("котик", "амфитамин")