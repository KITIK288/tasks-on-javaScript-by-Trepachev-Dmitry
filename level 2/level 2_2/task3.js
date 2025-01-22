// Дана строка. Удалите предпоследний символ из этой строки.

function task3(string) {
    a = string[string.length - 2];
    new_string = string.replace(a, "");
    console.log(new_string);
}

task3("котик");
