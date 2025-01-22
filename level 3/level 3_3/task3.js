// Дано некоторое слово:
//
// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

function task3(string) {
    reverse_string = string.split('').reduce((reversed, char) => char + reversed, '');
    if (string === reverse_string) {
        return 1;
    }
    return 0;
}

console.log(task3('abcba'));
