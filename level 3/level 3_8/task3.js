// Дана строка в формате:
//
// 'snake_case'
// Преобразуйте ее в формат:
//
// 'camelCase'

function task3(string) {
    let newString = "";
    let index = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] !== "_") {
            newString += string[i];
        } else {
            index = i;
        }
    }
    let newString2 = "";
    for (x = 0; x < newString.length; x++) {
        if (x === index) {
            newString2 += newString[x].toUpperCase();
        } else {
            newString2 += newString[x];
        }
    }
    console.log(newString2);
}

task3('snake_case');
