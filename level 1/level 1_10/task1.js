//  Дано некоторое число:
// 12345
//
// Выведите в консоль все его символы с конца.

function reverseString(str) {
    return str.split('').reverse().join('');
}

function task1(num) {
    string_num = String(num);
    reverse_string = reverseString(string_num);
    for (i = 0; i < reverse_string.length; i++) {
        console.log(Number(reverse_string[i]));
    }
}

task1(12345);
