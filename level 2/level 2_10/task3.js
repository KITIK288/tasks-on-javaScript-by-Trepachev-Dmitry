// Дана некоторая строка:
//
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
//
// '!bcde !bcde !bcde'

function replaceFirstChar(string) {
    return string.replace(/\b\w/g, '!');
}

const inputString = 'abcde abcde abcde';
const result = replaceFirstChar(inputString);
console.log(result); // '!bcde !bcde !bcde'
