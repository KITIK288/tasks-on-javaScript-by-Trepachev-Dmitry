//  Дана некоторая строка:
// 'abcdefg'
//
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

function task3(string) {
    new_string = "";
    counter = 0;
    for (i = 0; i < string.length; i++) {
        counter++;
        if (counter % 3 !== 0) {
            new_string += string[i];
        }
    }
    console.log(new_string);
}

task3('abcdefg');
