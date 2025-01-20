//  Дана строка:
// 'abcde'
//
// Получите массив букв этой строки.

function task1(string) {
    array = [];
    for (i = 0; i < string.length; i++) {
       array.push(string[i]);
    }
    console.log(array);
}

task1("жопа");
