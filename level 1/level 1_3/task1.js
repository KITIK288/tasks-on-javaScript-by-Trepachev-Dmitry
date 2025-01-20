// Дана строка.
//
// Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

function task1(string) {
    if (string.length <= 1) {
        console.log("В строке меньше одного символа")
    } else {
        console.log(string[string.length - 1]);
    }
}

task1("котик мяукает");
