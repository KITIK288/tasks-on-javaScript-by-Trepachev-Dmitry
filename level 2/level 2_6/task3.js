//  Дана некоторая строка с числом:
// '1234567'
//
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'

function formatNumberWithSpaces(numberString) {
    let result = '';
    let count = 0;

    for (let i = numberString.length - 1; i >= 0; i--) {
        result = numberString[i] + result;
        count++;

        if (count % 3 === 0 && i > 0) {
            result = ' ' + result;
        }
    }

    return result;
}

const inputString = '1234567';
const formattedString = formatNumberWithSpaces(inputString);
console.log(formattedString);  // Вывод: '1 234 567'
