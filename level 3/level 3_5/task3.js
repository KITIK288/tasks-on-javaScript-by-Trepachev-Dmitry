// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

function check(string) {
    for (i = 0; i < string.length; i++) {
        if (string[i] === "0") {
            return 1;
        }
    }
    return 0;
}

function task3(array) {

    new_array = [];

    for (x = 0; x < array.length; x++) {
        console.log(array[x]);
        string_num = String(array[x]);
        if (check(string_num) === 1) {
            new_array.push(string_num);
        }
    }
    console.log(new_array);
}

task3([1, 2, 3, 5, 44242, 9029402, 10, 33]);
